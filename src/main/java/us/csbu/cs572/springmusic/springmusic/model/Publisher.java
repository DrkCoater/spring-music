package us.csbu.cs572.springmusic.springmusic.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Email;

@Entity
@Table(name = "publishers")
@EntityListeners(AuditingEntityListener.class)
public class Publisher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Email
    @NotBlank
    private String email;

    @NotBlank
    private String lastName;

    @NotBlank
    private String firstName;

    private String middleName;

    private String company;
}
