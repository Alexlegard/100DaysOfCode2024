# Today, I added a bit of ASCII art to the Python
# Hangman game I made yesterday just for fun.
# Whenever the user guesses wrong, this function
# draws ASCII art of the gallows.
# I also made a couple other tiny bug fixes.


def drawGallows(lives):
    match lives:
        case -1:
            print("  ----")
            print("  |  |")
            print("  O  |")
            print(" -+- |")
            print(" / \ |")
            print("------")
            return
        case 0:
            print("  ----")
            print("  |  |")
            print("  O  |")
            print(" -+- |")
            print(" /   |")
            print("------")
            return
        case 1:
            print("  ----")
            print("  |  |")
            print("  O  |")
            print(" -+- |")
            print("     |")
            print("------")
            return
        case 2:
            print("  ----")
            print("  |  |")
            print("  O  |")
            print(" -+  |")
            print("     |")
            print("------")
            return
        case 3:
            print("  ----")
            print("  |  |")
            print("  O  |")
            print("  +  |")
            print("     |")
            print("------")
            return
        case 4:
            print("  ----")
            print("  |  |")
            print("  O  |")
            print("     |")
            print("     |")
            print("------")
            return