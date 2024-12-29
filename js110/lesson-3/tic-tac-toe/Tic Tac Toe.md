# Tic Tac Toe

## Objectives

- [x] Create a 3 x 3 grid
- [ ] Figure out player input for selecting a square
- [ ] Create a CPU ai to make smart decisions
	- [ ] Create random selection
	- [ ] Create defensive selection
	- [ ] Create Offensive selection
- [ ] Check if row has 3 in a row
	- [ ] Check 3 in row
	- [ ] Check 3 in Column
	- [ ] Check 3 in diagonal
- [ ] Keep track of player and CPU wins
	- [ ] Checking if either player has 3 wins
- [ ] Check if player wants to play again
### Creating 3 x 3 grid

Will need a 2-D array for the grid

```javascript
[
	["", "", ""] // Top row
	["", "", ""] // Mid row
	["", "", ""] // Bot row
]
```

Need to figure out a way to display it as so:

```
 x | x | x
 ---------
 x | x | x
 ---------
 x | x | x
```

And have each element of those arrays fill in the `X` whether its the users or the CPU

### Need get a intuitive way to select

Hard part for user here would be on how to select the grid coordinates

**Approach 1**
```
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
```

**Approach 2**
```
  1   2   3
1 x | x | x
 ---------
2 x | x | x
 ---------
3 x | x | x

Column Selection: 2
Row selection: 1
```

### Create CPU ai

Allow CPU to pick next winning move, if else pick a defensive move, if else pick middle square, else random square

```
Winning move -> Defensive move -> Middle -> Random
```

Make the CPU play smarter on selection. If User is about to win then play defense, If CPU has 2 in a row and is able to win play more offensively
#### Defense

If user has 2 in a row and the 3rd is open, have the CPU cover that spot to stop the user from winning

#### Offense

And if the CPU has 2 in a row and the 3rd one is open, have the CPU cover that spot to win the game

### Keep track of score

Have the game best out of 5. First one to 3 wins, wins the game. Then ask if the player wants to play again

```
Player Score: 1 | Ties: 0 | CPU Score: 2
```
