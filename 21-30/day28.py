# Pokemon hangman game that I made in Coffee 'n' Code.
# I don't usually make Python programs, but this wasn't
# so bad. The code is commented because I don't feel like
# importing utils and the word list =(

# import random
# import wordList
# from utils import drawWord, checkIsCorrect, userWonGame

# numLives = 5
# guessedLetters = []
# random_number = random.randint(0, 150)
# random_pokemon = wordList.words[random_number]

# print("Let's play Pokemon Hangman!")

# while numLives >= 0:
#     print(drawWord(random_pokemon, guessedLetters))
#     letter = input("Please guess a letter:").lower()
#     if len(letter) != 1:
#         print("Invalid letter.")
#         continue
#     elif not(letter.isalpha()):
#         print("Invalid letter.")
#         continue
#     # Check if the user already guessed that letter
#     if letter in guessedLetters:
#         print(f"Already guessed {letter}")
#         print(f"You have already guessed {', '.join(guessedLetters)}")
#         continue
#     else:
#         guessedLetters += letter
#         if(checkIsCorrect(letter, random_pokemon)):
#             if(userWonGame(random_pokemon, guessedLetters)):
#                 # User won the game
#                 print(f"The Pokemon is {random_pokemon}")
#                 print("Congratulations, you're a Pokemon Master! Play again sometime.")
#                 break
#             else:
#                 # User guessed correctly but hasn't yet won
#                 print("Correct")
#                 continue
#         else:
#             numLives -= 1
#             if(numLives >= 0):
#                 # User guessed wrong but still has lives
#                 print(f"You guessed wrong. {numLives} lives remaining.")
#             else:
#                 # User lost the game
#                 print(f"The Pokemon is {random_pokemon}")
#                 print("Game over! You're still a Pokemon novice. Better luck next time!")