package demo;

import java.awt.Graphics;
import javax.swing.JPanel;
import java.io.Serial;
import java.net.MalformedURLException;

public class Renderer extends JPanel {
    @Serial
    private static final long serialVersionUID = 1L;

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        if(App.flappyBird != null) {
            try {
                App.flappyBird.repaint(g);
            } catch (MalformedURLException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
