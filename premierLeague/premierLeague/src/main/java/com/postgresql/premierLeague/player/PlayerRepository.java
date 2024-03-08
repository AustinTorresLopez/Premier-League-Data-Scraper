package com.postgresql.premierLeague.player;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Long> {
    List<Player> findByTeam(String teamName);
    List<Player> findByNameContainingIgnoreCase(String searchText);
    List<Player> findByPosContainingIgnoreCase(String searchText);
    List<Player> findByNationContainingIgnoreCase(String searchText);
    List<Player> findByTeamAndPos(String team, String position);
}
