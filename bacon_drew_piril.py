question1 = raw_input("Do you want to feel like angels are frolicking on your tastebuds?")

def bacongame(answer):
	answer = answer.lower()
	if answer == "yes" or answer == "y":
		print "Eat it"
	elif answer == "no" or answer == "n":
		print "You've clearly never tasted bacon."
		print "Eat it"
	else:
		question2 = raw_input("Are you a coward?")
		question2 = question2.lower()
		if question2=="yes" or question2=="y":
			print"BACON WILL TURN YOU INTO A TRUE WARRIOIR!"
		else:
			print "EAT IT!"


bacongame(question1)

