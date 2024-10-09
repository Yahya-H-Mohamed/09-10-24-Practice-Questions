"""
Question 1

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
"""

def reverse_words(text):
    words = []
    current_word = ""
    
    for letter in text:
        if letter == " ":
            if current_word: #If a word has already been built
                words.append(current_word[::-1]) # Reverse and add it to the array
                current_word = "" # Reset the word back
            words.append(letter) # and add the empty space
        else:
            current_word += letter # Build the current word
            
     # If there is still a word that has not yet been added       
    if current_word:
        words.append(current_word[::-1]) # Reverse the last word and add it to the array
    
    return "".join(words) # Join all parts and return the result


"""
Question 2

Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.

Make a function that receive age, and return what they drink.

Rules:
Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.

Examples: (Input --> Output):
13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
"""


def people_with_age_drink(age):
    if age < 14:
        return "drink toddy"
    elif age < 18:
        return "drink coke"
    elif age < 21:
        return "drink beer"
    elif age >= 21:
        return "drink whisky"


"""
Question 3

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case:	                return:
name equals owner	   'Hello boss'
otherwise	           'Hello guest'
"""

def greet(name, owner):
    if name == owner:
        return "Hello boss"
    else:
        return "Hello guest"