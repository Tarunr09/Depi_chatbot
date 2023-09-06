import random

jokes = [
    "Watcha writing?\nSucide Note\nYou misspelled useless",
    "A large number of orphans become highly successful.\nWhen your only options are to go big or go home, the decision is kind of out of your hands.",
    "What do you call intelligent people in the U.S.?\nTourists.",
    "How is gender similar to the twin towers?\nThere used to be two of them, and now it is a sensitive subject.",
    "Why do Chinese people like playing Among Us?\nIt's the only place they can vote!"
]

R_EATING = "I don't like eating anything because I'm a bot obviously!"
R_ADVICE = "If I were you, I would go to the internet and type exactly what you wrote there!"
R_HAPPY="Happiness is a choice. Choose to be happy, even when things are tough."
R_END="Your loved ones would be devastated without you. Stay strong for them."
R_LIFE="You can do anything you set your mind to. Just start small and take it one step at a time."
R_SAD = "Music is one of the best ways to calm yourself. So visit https://open.spotify.com/ and listen to your favourite song."
R_STRESS = f"Here's a joke to lighten your mood:\n{random.choice(jokes)}"


# def unknown():
#     response = ["Sorry ! I am not sure what that means as I am normal python bot and dont have much knowledge about this particular topic but you can always refer my friends CHAT-GPT OR BARD-AI ,I am sure they will provide you with what you are looking for !!\n Have a Nice Day !!!"][
#         random.randrange(1)]
#     return response

def unknown():
    response = ["Depression is a dark cloud that can block out the sun, but it doesn't mean the sun has stopped shining. There is still hope and happiness out there, even if you can't see it right now. Don't give up on yourself. Keep fighting, and you will eventually find your way back to the light.\n I hope the conversation which we had gave you some good time and if you still need someone to talk to you can always contact 1800-599-0019 \n Thank you !! Hope you are feeling better now !!!!"][
        random.randrange(1)]
    return response
