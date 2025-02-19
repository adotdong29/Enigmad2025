export const gameConfig = {
  gridSize: {
    rows: 5,
    cols: 7
  },
  animation: {
    bombeRunDuration: 2000,
    dotClickDelay: 100,
    messageRevealDelay: 500,
    transitionDuration: 300
  },
  scoring: {
    basePoints: 100,
    timeBonus: {
      fast: 50,
      medium: 25,
      slow: 10
    },
    patternEfficiencyBonus: {
      minimal: 50,
      efficient: 25,
      standard: 10
    },
    penalties: {
      wrongPattern: -10,
      wrongAnswer: -5
    }
  },
  difficulty: {
    easy: {
      timeLimit: 300000, // 5 minutes
      maxAttempts: 5,
      hintDelay: 60000 // 1 minute
    },
    medium: {
      timeLimit: 420000, // 7 minutes
      maxAttempts: 4,
      hintDelay: 120000 // 2 minutes
    },
    hard: {
      timeLimit: 600000, // 10 minutes
      maxAttempts: 3,
      hintDelay: 180000 // 3 minutes
    }
  },
  audio: {
    enabled: true,
    volume: 0.5,
    effects: {
      dotClick: 'click.mp3',
      bombeRun: 'running.mp3',
      success: 'success.mp3',
      error: 'error.mp3'
    }
  }
};