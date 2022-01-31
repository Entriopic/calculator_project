My Calculator project with basic operators and minimalistic design, hope you like it! :D

Tip for myself: 
So here's a tip while you continue working on the other features. It helps to think of all your event listeners in terms of conditions, for example if you press '+' you have these cases:
1. If there's no firstNum or secondNum, you do nothing, because you can't start a calculation with an operator.
2. If there's something on the screen, you save that and the '+' as the firstNum, and then clear the screen to prepare for the secondNum
3. If there's a firstNum and another number on the screen, you save this second number as secondNum and calculate the result, which then gets saved as firstNum like above.

And like this for all other buttons.