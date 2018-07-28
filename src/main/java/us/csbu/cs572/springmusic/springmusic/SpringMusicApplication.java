package us.csbu.cs572.springmusic.springmusic;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class SpringMusicApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringMusicApplication.class, args);
    }
}
