package Angry_FlappyBird;

import java.awt.Color;
import java.awt.Font;
import java.awt.FontFormatException;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.Rectangle;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Random;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.Timer;
import javax.swing.border.LineBorder;

import jaco.mp3.player.MP3Player;

// reference link how to demo app Flappy Bird:	https://www.youtube.com/watch?v=I1qTZaUcFX0&list=WL&index=120

// link how to custom font: 					https://www.youtube.com/watch?v=43duJsYmhxQ&t=2s
// link font: 									https://www.fontspace.com/
// link how to play audio mp3:					https://www.youtube.com/watch?v=FcPHlKovmmw

public class App implements ActionListener, KeyListener, WindowListener { //added MouseListener
	
	public static App flappyBird;
	private FrameLevels frameLevels;
	private JFrame jframe;
	private final static int WIDTH = 850;
	private final static int HEIGHT = 720;
	private Renderer renderer;
	private RectangleImage recImgBird, recImgBG;
	
	private Rectangle bird1;
	private ArrayList<Rectangle> barriers;
	private Random random;
	private int ticks, yMotion, score;
	private boolean gameOver, started, win;
	
	private JLabel lblBG, lblBird, lblThreeBirds, lblLevel, lblMemeGlasses, lblMedal;
	private Image imgBird, resizeImgBird, 
					imgDeadBird, resizeImgDeadBird, 
					imgBG, resizeImgBG,
					imgMemeGlasses, resizeImgMemeGlasses,
					imgMedal, resizeImgMedal;
	private JButton btnPlay, btnRestart, btnLevels, btnExit;
	private Font customFontTitle, customFontBtn, customFontScore, customFontGameOver, customFontGameWin;
	
	private final long createdMillis = System.currentTimeMillis();
	
	public static void main(String[] args) {
		try {
			flappyBird=new App();
		} catch (FontFormatException | IOException e) {
			e.printStackTrace();
		}
	}
	
	public App() throws FontFormatException, IOException {
		jframe=new JFrame();
		
		Timer timer=new Timer(20, this);
		
		renderer=new Renderer();
		jframe.add(renderer);
		
		jframe.setTitle("Bang Blue Birds (version Angry + Flappy Bird)");
		jframe.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		jframe.setSize(WIDTH, HEIGHT);
		jframe.setResizable(false);
		jframe.setLocationRelativeTo(null);
		jframe.setVisible(true);
		
		//background
		lblBG=new JLabel("");
//		imgBG = Toolkit.getDefaultToolkit().getImage("images\\angrybirds-bg.png"); //build path folder images to source folder
		imgBG = Toolkit.getDefaultToolkit().getImage("images\\flappybird-bg.png"); //build path folder images to source folder
		resizeImgBG = imgBG.getScaledInstance(WIDTH, HEIGHT-155, Image.SCALE_SMOOTH);
		lblBG.setIcon(new ImageIcon(resizeImgBG));
		recImgBG = new RectangleImage(resizeImgBG, 0, 0, WIDTH, HEIGHT-155);
		
		//bird
		lblBird=new JLabel("");
		imgBird = Toolkit.getDefaultToolkit().getImage("images\\bluebird-angrybirds-3.png"); //build path folder images to source folder
		resizeImgBird = imgBird.getScaledInstance(45, 45, Image.SCALE_SMOOTH);
		lblBird.setIcon(new ImageIcon(resizeImgBird));
		recImgBird = new RectangleImage(resizeImgBird, 250, 330, 45, 45); //img, x, y, width, height
		bird1 = recImgBird.getRect();
		
		//dead bird
		imgDeadBird = Toolkit.getDefaultToolkit().getImage("images\\blue angry bird dead.png"); //build path folder images to source folder
		resizeImgDeadBird = imgDeadBird.getScaledInstance(45, 45, Image.SCALE_SMOOTH);
		lblBird.setIcon(new ImageIcon(resizeImgDeadBird));

		barriers = new ArrayList<Rectangle>();
		random = new Random();
		
		//three birds gif
		lblThreeBirds=new JLabel("");
		lblThreeBirds.setIcon(new ImageIcon("images\\theblues.gif"));
		lblThreeBirds.setBounds(310, 190, 200, 200); //x,y,width,height
		renderer.add(lblThreeBirds);
		
		//custom fonts
		customFontTitle = Font.createFont(Font.TRUETYPE_FONT, new File("fonts\\Yackien.ttf")).deriveFont(58f);
//		GraphicsEnvironment geTitle = GraphicsEnvironment.getLocalGraphicsEnvironment();
//		geTitle.registerFont(Font.createFont(Font.TRUETYPE_FONT, new File("fonts\\Yackien.ttf")));
		customFontBtn = Font.createFont(Font.TRUETYPE_FONT, new File("fonts\\GamePlayed-vYL7.ttf")).deriveFont(25f);
		customFontScore = Font.createFont(Font.TRUETYPE_FONT, new File("fonts\\GamePlayedOutline-wrX8.ttf")).deriveFont(70f);
		customFontGameOver = Font.createFont(Font.TRUETYPE_FONT, new File("fonts\\GameOfSquids-1GMVL.ttf")).deriveFont(70f);
		
		//title name level
		lblLevel=new JLabel("Yo");
		lblLevel.setFont(customFontBtn);
		lblLevel.setForeground(Color.white);
		lblLevel.setLocation(10, 120);
		
		//button play
		btnPlay = new JButton("PLAY NOW");
		btnPlay.setForeground(Color.blue.darker());
//		btnPlay.setFont(new Font("SansSerif", Font.BOLD, 16));
		btnPlay.setFont(customFontBtn);
		btnPlay.setBorder(new LineBorder(new Color(0, 146, 182), 2, true));
		btnPlay.setBackground(Color.white);
		btnPlay.setBounds(190, 450, 180, 35); //x, y, width, height
		
		//button how to play
		btnLevels = new JButton("LEVELS");
		btnLevels.setForeground(Color.blue.darker());
		btnLevels.setFont(customFontBtn);
		btnLevels.setBorder(new LineBorder(new Color(0, 146, 182), 2, true));
		btnLevels.setBackground(Color.white);
		btnLevels.setBounds(450, 450, 180, 35);
		
		//button play again
		btnRestart = new JButton("RESTART");
		btnRestart.setForeground(Color.blue.darker());
		btnRestart.setFont(customFontBtn);
		btnRestart.setBorder(new LineBorder(new Color(0, 146, 182), 2, true));
		btnRestart.setBackground(Color.white);
		btnRestart.setVisible(false);
		
		//button exit
		btnExit = new JButton("EXIT GAME");
		btnExit.setForeground(Color.blue.darker());
		btnExit.setFont(customFontBtn);
		btnExit.setBorder(new LineBorder(new Color(0, 146, 182), 2, true));
		btnExit.setBackground(Color.white);
		btnExit.setBounds(320, 505, 180, 35); //x, y, width, height
		
		if(!started) {
			jframe.setFocusable(false);
			renderer.add(btnPlay);
			renderer.add(btnLevels);
			renderer.add(btnExit);
		}
		
		addBarriers(true);
		addBarriers(true);
		addBarriers(true);
		addBarriers(true);
		
		timer.start();
		
		//event
		jframe.addKeyListener(this);
		btnPlay.addActionListener(this);
		btnRestart.addActionListener(this);
		btnLevels.addActionListener(this);
		btnExit.addActionListener(this);
	}

	//paint sky, bird, land, grass
	public void repaint(Graphics g) {
		//sky
//		g.setColor(Color.cyan);
//		g.fillRect(0, 0, WIDTH, HEIGHT);
		recImgBG.draw((Graphics2D) g, null);
		g.drawRect(recImgBG.getRect().x, recImgBG.getRect().y, recImgBG.getRect().width, recImgBG.getRect().height);

		//land
		g.setColor(Color.orange.darker());
		g.fillRect(0, 565, WIDTH, 140); //x, y, width, height

		//grass
		g.setColor(Color.green);
		g.fillRect(0, 565, WIDTH, 20);
		
		//barriers
		for(Rectangle barrier : barriers) {
			g.setColor(Color.green.darker());
			g.fillRect(barrier.x, barrier.y, barrier.width, barrier.height);
		}
		
		//title
//		g.setFont(new Font("Arial", 1, 100));
		//click to start
		if(!started) {
			g.setFont(customFontTitle);
			g.setColor(Color.white);
			g.drawString("Bang Blue Birds", 222, 170); //name, x, y
		}
		//game over
		if(gameOver) {
			recImgBird.draw((Graphics2D) g, null);
			recImgBird.setImg(resizeImgDeadBird);
			g.setColor(new Color(132, 226, 138));
			g.drawRect(bird1.x, bird1.y, bird1.width, bird1.height);
			
			//grass
			g.setColor(Color.green);
			g.fillRect(0, 565, WIDTH, 20);

			g.setFont(customFontGameOver);
			g.setColor(Color.orange);
			if(score<10)
				g.drawString(String.valueOf(score), 395, 100);
			if(score>=10 && score<100)
				g.drawString(String.valueOf(score), 380, 100);
			if(score==100)
				g.drawString(String.valueOf(score), 375, 100);
			g.drawString("Game Over!", 140, 280); //name, x, y
		}
		//playing and get score
		if(!gameOver && started) {
			//bird
			recImgBird.draw((Graphics2D) g, null);
			g.setColor(new Color(0, 153, 204));
			recImgBird.borderDashedRect((Graphics2D) g);
			g.drawRect(bird1.x, bird1.y, bird1.width, bird1.height);
			
			//score
			g.setFont(customFontScore);
			g.setColor(Color.white);
			if(score<10)
				g.drawString(String.valueOf(score), 395, 100);
			if(score>=10 && score<100)
				g.drawString(String.valueOf(score), 380, 100);
			
			//name levels
			if(score<=100) {
				g.setFont(customFontBtn);
				g.setColor(Color.white);
				if(score<4)
					g.drawString("Lv. EASY", 50, 150);
				if(score>=30 && score<34)
					g.drawString("Lv. NORMAL", 50, 150);
				if(score>=55 && score<59)
					g.drawString("Lv. HARD", 50, 150);
				if(score>=80 && score<84)
					g.drawString("Lv. VERY HARD", 50, 150);
			}
		}
		if(win) {
			g.setColor(Color.orange);
			g.setFont(customFontGameOver);
			g.drawString(String.valueOf(score), 365, 100);
			
			try {
				g.setColor(Color.white);
				g.drawString("+", 678, 283);
				
				customFontGameWin = Font.createFont(Font.TRUETYPE_FONT, new File("fonts\\PricedownBlack-MwRY.ttf")).deriveFont(60f);
				g.setFont(customFontGameWin);
				g.setColor(Color.orange);
				g.drawString("mission passed!", 380, 220);
				
				g.setColor(Color.white);
				g.drawString("respect", 450, 280);
			} catch (FontFormatException | IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	//add barriers
	public void addBarriers(boolean start) {
		int space = 300; //bird through barriers
		int width = 100;
		int height = 50 + random.nextInt(300);

		if (start) {
			barriers.add(new Rectangle(WIDTH + width + barriers.size() * 250, HEIGHT - height - 155, width, height));    //155 is distances of barriers and grasses
			barriers.add(new Rectangle(WIDTH + width + (barriers.size() - 1) * 230, 0, width, HEIGHT - height - space)); //230 is distances of barriers
		} else {
			barriers.add(new Rectangle(barriers.get(barriers.size() - 1).x + 600, HEIGHT - height - 155, width, height));
			barriers.add(new Rectangle(barriers.get(barriers.size() - 1).x, 0, width, HEIGHT - height - space));
		}
	}
	
	//handle start game
	public void handleStartGame() {
		ticks++;

		if(started) {
			//move barriers from right -> left
			for(int i=0; i<barriers.size(); i++) {
				Rectangle barrier = barriers.get(i);
				
				//lv easy - speed
				if(score>=0 && score<30)
					barrier.x -= 10;
				
				//lv normal - speed
				if(score>=30 && score<55)
					barrier.x -= 11;
				
				//lv hard - speed
				if((score>=55 && score<80) || (score>=80 && score<=100))
					barrier.x -= 12;
				
				//barriers loop
				if(barrier.x + barrier.width < 0) {
					barriers.remove(barrier);
					if(barrier.y == 0)
						addBarriers(false);
				}
			}
			
			//bird auto fall
			if(ticks%2 == 0 && yMotion<15) {
				if(score<55)
					yMotion+=2;
				if(score>=55 && score<80)
					yMotion+=3;
				if(score>=80 && score<=100)
					yMotion+=4;
			}

			bird1.y += yMotion;
			
			handleGameOver();
			handleWinGame();
		}
	}
	
	//handle end game
	@SuppressWarnings("deprecation")
	public void handleGameOver() {
		//game over - bird impact to barrier | va chạm
		for(Rectangle barrier : barriers) {
			if(barrier.y==0 && (bird1.x+bird1.width / 2 > barrier.x+barrier.width / 2 - 5) && (bird1.x+bird1.width / 2 < barrier.x+barrier.width / 2 + 5)) {
				score++;
				if(score==100)
					score=100;
				if(score==100 && gameOver) {
					score = 99;
				}
			}
			
			if(barrier.intersects(bird1)) {
				gameOver = true;
				
				if(bird1.x <= barrier.x) {
					bird1.x = barrier.x - bird1.width;
//					yMotion+=1;
				}
				else {
					if(barrier.y != 0)
						bird1.y = barrier.y - bird1.height;
					else if(bird1.x < barrier.height)
						bird1.y = barrier.height;
				}
				
				if(score==100)
					score=99;
			}
		}

		//game over - bird fallen or fly too high
		if(bird1.y>=535 || bird1.y<0) 
			gameOver = true;
		
		//game over
		if(bird1.y+yMotion >= HEIGHT-170 && gameOver) {
//			yMotion+=5;
			bird1.y = HEIGHT - 155 - bird1.height; //bird.y = 520
		}
		
		if(score==100 || (bird1.x==-45 && bird1.y==-45)) {
			gameOver = false;
			btnPlay.hide();
			btnLevels.hide();
			btnExit.hide();
		}
		
		if(gameOver) {
			btnRestart.setFont(customFontBtn);
			btnRestart.setBounds(330, 380, 180, 35); //x, y, width, height
			btnRestart.setVisible(true);
			
			btnLevels.setFont(customFontBtn);
			btnLevels.setBounds(330, 430, 180, 35);
			btnLevels.setVisible(true);
			
			btnExit.setBounds(330,480, 180, 35);
			btnExit.setVisible(true);
			
			renderer.add(btnRestart);
			renderer.add(btnLevels);
			renderer.add(btnExit);
		}		
	}
	
	//handle win game
	public void handleWinGame() {
		if(score==100) {
			barriers.clear();
			win = true;
			if(win) {
				bird1.x = bird1.y = -45;
				
				lblMemeGlasses=new JLabel("");
				imgMemeGlasses = Toolkit.getDefaultToolkit().getImage("images\\black-glass-meme.png"); //build path folder images to source folder
				resizeImgMemeGlasses = imgMemeGlasses.getScaledInstance(260, 340, Image.SCALE_SMOOTH);
				lblMemeGlasses.setIcon(new ImageIcon(resizeImgMemeGlasses));
				lblMemeGlasses.setBounds(177, 230, 270, 340);

				lblMedal=new JLabel("");
				imgMedal = Toolkit.getDefaultToolkit().getImage("images\\medal.png"); //build path folder images to source folder
				resizeImgMedal = imgMedal.getScaledInstance(115, 110, Image.SCALE_SMOOTH);
				lblMedal.setIcon(new ImageIcon(resizeImgMedal));
				lblMedal.setBounds(175, 450, 115, 110); //x=175, y=450
				lblBird=new JLabel("");

				imgBird = Toolkit.getDefaultToolkit().getImage("images\\bluebird-angrybirds-3 1.png"); //build path folder images to source folder
				resizeImgBird = imgBird.getScaledInstance(322, 310, Image.SCALE_SMOOTH);
				lblBird.setIcon(new ImageIcon(resizeImgBird));
				lblBird.setBounds(120, 280, 322, 310);
				
				renderer.add(lblMemeGlasses);
				renderer.add(lblMedal);
				renderer.add(lblBird);
				
				//gta thug life sound
				//link download: http://jacomp3player.sourceforge.net/download.html
				MP3Player mp3GTA = new MP3Player(new File("images\\[MP3DOWNLOAD.TO] GTA San Andreas - Mission passed sound-320k.mp3"));
				mp3GTA.play(); //play in 7s

				if(!mp3GTA.isPaused() && !mp3GTA.isStopped() && win && score==100) {
					long milis = System.currentTimeMillis();
					int nowSeconds = (int) ((milis - this.createdMillis) / 1000);
					
//					System.out.println("is playing mp3");
					if(nowSeconds>4) {
						mp3GTA.stop();				
					}
				}
//				if(mp3GTA.isStopped()) System.out.println("stopped");
			}
		}
	}
	
	//bird flying
	public void jump() {
		if(gameOver) {
			recImgBird = new RectangleImage(resizeImgBird, 250, 330, 45, 45);
			bird1 = recImgBird.getRect();
			barriers.clear();
			yMotion = 0;
			score = 0;

			addBarriers(true);
			addBarriers(true);
			addBarriers(true);
			addBarriers(true);

			gameOver = false;
		}

		if(!started)
			started = true;
		
		if (!gameOver) {
			if(yMotion>0)
				yMotion=0;
			if(score<55)
				yMotion -= 10;
			if(score>=55 && score<=100)
				yMotion -= 12;
		}
	}
	
	//click for bird fly
	public void clickBird() {
		jframe.addMouseListener(new MouseListener() {
			@Override
			public void mouseClicked(MouseEvent e) {
				if(!gameOver) 
					jump();
			}

			@Override
			public void mousePressed(MouseEvent e) {}

			@Override
			public void mouseReleased(MouseEvent e) {}

			@Override
			public void mouseEntered(MouseEvent e) {}

			@Override
			public void mouseExited(MouseEvent e) {}
		});
	}
	
	@SuppressWarnings("deprecation")
	@Override
	public void actionPerformed(ActionEvent e) {
		Object o = e.getSource();
		
		if(o.equals(btnPlay)) {
			jframe.setFocusable(true);

			jump();
			clickBird();
			
			btnPlay.hide();
			btnLevels.hide();
			btnExit.hide();

			if(frameLevels==null)
				btnLevels.setEnabled(true);
			
			renderer.remove(lblThreeBirds);
		}
		
		if(o.equals(btnRestart)) {
			jframe.setFocusable(true);
			jump();
			
			btnRestart.setVisible(false);
			btnLevels.setVisible(false);
			btnExit.setVisible(false);
			
			if(frameLevels==null)
				btnLevels.setEnabled(true);
		}
		
		if(o.equals(btnLevels)) {
			jframe.setFocusable(false);
			frameLevels = new FrameLevels();
			btnLevels.setEnabled(false);
		}
		
		if(o.equals(btnExit)) {
			int ok = JOptionPane.showConfirmDialog(null, "Do you want to exit?", "Notice", JOptionPane.OK_CANCEL_OPTION);
			if(ok == JOptionPane.OK_OPTION)
				System.exit(0);
		}
		
		handleStartGame();
		
		renderer.repaint();
	}
	
	@Override
	public void keyTyped(KeyEvent e) {}

	@Override
	public void keyPressed(KeyEvent e) {}

	@Override
	public void keyReleased(KeyEvent e) {
		if(e.getKeyCode() == KeyEvent.VK_SPACE && !gameOver)
			jump();

		if(e.getKeyCode() == KeyEvent.VK_ESCAPE && gameOver) {
			int ok = JOptionPane.showConfirmDialog(null, "Do you want to exit?", "Notice", JOptionPane.OK_CANCEL_OPTION);
			if(ok == JOptionPane.OK_OPTION)
				System.exit(0);
		}
	}
	
	
	//frame levels
	public class FrameLevels extends JFrame implements ActionListener {
		private static final long serialVersionUID = 1L;

		private JLabel lblClouds, lblScore, lblEasy, lblNormal, lblHard, lblVeryHard;
		private JButton btnOk;
		private Font customFontLevel;
		
		public FrameLevels() {
			setTitle("All levels");
			setSize(500, 500);
			setResizable(false);
			setDefaultCloseOperation(DO_NOTHING_ON_CLOSE);
//			setUndecorated(true);
//			getRootPane().setWindowDecorationStyle(JRootPane.NONE);
			setLocationRelativeTo(null);
			setLayout(null);
			getContentPane().setBackground(new Color(153, 255, 255));
			setVisible(true);
			
			try {
				customFontLevel = Font.createFont(Font.TRUETYPE_FONT, new File("fonts\\GamePlayedOutline-wrX8.ttf")).deriveFont(30f);
			} catch (FontFormatException | IOException e) {
				e.printStackTrace();
			}
			
			lblScore = new JLabel("SCORE");
			lblScore.setFont(customFontLevel);
			lblScore.setForeground(Color.orange.darker());
			lblScore.setBounds(200, 30, 100, 30);
			add(lblScore);
			
			lblEasy = new JLabel("EASY                       0  -  29");
			lblEasy.setFont(customFontLevel);
			lblEasy.setForeground(Color.blue);
			lblEasy.setBounds(40, 100, 500, 30);
			add(lblEasy);
			
			lblNormal = new JLabel("NORMAL                30  -  54");
			lblNormal.setFont(customFontLevel);
			lblNormal.setBounds(40, 150, 500, 30);
			add(lblNormal);
			
			lblHard = new JLabel("HARD                       55  -  79");
			lblHard.setFont(customFontLevel);
			lblHard.setForeground(Color.red);
			lblHard.setBounds(40, 250, 500, 30);
			add(lblHard);
			
			lblVeryHard = new JLabel("VERY HARD           80  -  100");
			lblVeryHard.setFont(customFontLevel);
			lblVeryHard.setForeground(new Color(102, 0 , 153)); //purple
			lblVeryHard.setBounds(40, 300, 500, 30);
			add(lblVeryHard);
			
			lblClouds=new JLabel("");
			lblClouds.setIcon(new ImageIcon("images\\clouds.gif"));
			lblClouds.setBounds(0, -15, 500, 250); //x,y,width,height
			add(lblClouds);
			
			btnOk = new JButton("OK");
			btnOk.setForeground(Color.blue.darker());
			btnOk.setFont(customFontBtn);
			btnOk.setBorder(new LineBorder(new Color(0, 146, 182), 2, true));
			btnOk.setBackground(Color.white);
			btnOk.setBounds(155, 380, 180, 35);
			btnOk.addActionListener(this);
			add(btnOk);
		}

		@Override
		public void actionPerformed(ActionEvent e) {
			if(e.getSource().equals(btnOk)) {
				frameLevels.dispose();
				
				if(!frameLevels.isVisible())
					btnLevels.setEnabled(true);
			}
		}
	}

	@Override
	public void windowOpened(WindowEvent e) {}

	@Override
	public void windowClosing(WindowEvent e) {}

	@Override
	public void windowClosed(WindowEvent e) {}

	@Override
	public void windowIconified(WindowEvent e) {}

	@Override
	public void windowDeiconified(WindowEvent e) {}

	@Override
	public void windowActivated(WindowEvent e) {}

	@Override
	public void windowDeactivated(WindowEvent e) {
		lblThreeBirds.setBounds(310, 190, 200, 200);
		btnPlay.setBounds(190, 450, 180, 35);
		btnLevels.setBounds(450, 450, 180, 35);
		btnExit.setBounds(320, 505, 180, 35);
	}
	
}
