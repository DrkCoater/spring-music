package us.csbu.cs572.springmusic.springmusic.repository;

import us.csbu.cs572.springmusic.springmusic.model.Music;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface MusicRepository extends JpaRepository<Music, Long> {

}
