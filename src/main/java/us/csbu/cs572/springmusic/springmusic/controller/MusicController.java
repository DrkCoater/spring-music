package us.csbu.cs572.springmusic.springmusic.controller;

import us.csbu.cs572.springmusic.springmusic.exception.ResourceNotFoundException;
import us.csbu.cs572.springmusic.springmusic.model.Music;
import us.csbu.cs572.springmusic.springmusic.repository.MusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class MusicController {

    @Autowired
    MusicRepository musicRepository;

    // Get All Music
    @GetMapping("/songs")
    public List<Music> getAllMusic() {
        return musicRepository.findAll();
    }

    // Create a new Music
    @PostMapping("/songs")
    public Music createMusic(@Valid @RequestBody Music music) {
        return musicRepository.save(music);
    }

    // Get a Single Music
    @GetMapping("/songs/{id}")
    public Music getMusicById(@PathVariable(value = "id") Long musicId) {
        return musicRepository.findById(musicId)
                .orElseThrow(() -> new ResourceNotFoundException("Music", "id", musicId));
    }

    // Update a Music
    @PutMapping("/songs/{id}")
    public Music updateMusic(@PathVariable(value = "id") Long musicId,
                           @Valid @RequestBody Music musicDetails) {
        Music music = musicRepository.findById(musicId)
                .orElseThrow(() -> new ResourceNotFoundException("Music", "id", musicId));
        music.setName(musicDetails.getName());
        music.setAlbum(musicDetails.getAlbum());
        return musicRepository.save(music);
    }

    // Delete a Music
    @DeleteMapping("/songs/{id}")
    public ResponseEntity<?> deleteMusic(@PathVariable(value = "id") Long musicId) {
        Music music = musicRepository.findById(musicId)
                .orElseThrow(() -> new ResourceNotFoundException("Music", "id", musicId));
        musicRepository.delete(music);
        return ResponseEntity.ok().build();
    }
}
