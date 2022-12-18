package Angry_FlappyBird;

import java.awt.BasicStroke;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.Rectangle;
import java.awt.image.ImageObserver;

// reference link: how to add image to rectangle 
// https://www.youtube.com/watch?v=0MKLBh0fBbg&list=WL&index=126

public class RectangleImage {
	private Image img=null;
	private Rectangle rect=null;
	final static float dash1[] = {10.0f};
	
	public RectangleImage(Image img, int x, int y, int w, int h) {
		this.img = img;
		this.rect = new Rectangle(x, y, w, h); //x, y, width, height
	}

	public Image getImg() {
		return img;
	}

	public void setImg(Image img) {
		this.img = img;
	}

	public Rectangle getRect() {
		return rect;
	}

	public void setRect(Rectangle rect) {
		this.rect = rect;
	}

	public void move(int x, int y) {
		this.rect.setBounds(x, y, rect.width, rect.height);
	}
	
	public void draw(Graphics2D g2, ImageObserver o) {
		g2.drawImage(this.img, this.rect.x, this.rect.y, this.rect.width, this.rect.height, o);
		//g2.draw(rect);
	}
	
	public void borderDashedRect(Graphics2D g2) {
		g2.setStroke(new BasicStroke(1.0f,
                BasicStroke.CAP_BUTT,
                BasicStroke.JOIN_MITER,
                10.0f, dash1, 0.0f));
	}
	
}
