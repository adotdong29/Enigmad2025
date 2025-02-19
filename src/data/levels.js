export const levels = [
  {
    id: 1,
    encryptedMessage: "KHOORZRUOG",
    correctMessage: "HELLOWORLD",
    hint: "Real world stratgey: Look for repeated letters. This was one of the strategies that real world code breakers at Bletchley Park would have used. The repeated letters would have limited the possible words in the sentance. " ,
    requiredDots: ['4-2', '1-1', '3-4','0-3'],
    decryptionKey: "right shift 3",
    difficulty: "easy"
  },
  {
    id: 2,
    encryptedMessage: "DWWDFNDWGDZQ",
    correctMessage: "ATTACKATDAWN",
    hint: "Real world strategy: Notice the pattern of W's, This was one of the strategies that real world code breakers at Bletchley Park would have used. The letters in the pattern would have suggested a combination of th same letter being used in different places",
    requiredDots: ['0-1', '1-2', '2-3'],
    decryptionKey: "left shift 5",
    difficulty: "medium"
  },
  {
    id: 3,
    encryptedMessage: "YHQLYLGLYLFL",
    correctMessage: "VENIVIDIVICI",
    hint: "Famous Latin phrase",
    requiredDots: ['0-2', '1-2', '2-2','4-2','2-2','3-0'],
    decryptionKey: "right shift 7",
    difficulty: "hard"
  }
];