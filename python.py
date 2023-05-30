#Vytvoříme proměnnou scale, do které uložíme všechny tóny

scale = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "bb", "b",]

#vytvoříme vstupy, které bude zadávat uživatel

x = input("Zde vložte první interval:")
y = input("Zde vložte druhý interval:")

#pomocí metody index vybereme z proměnné "scale" zadaný interval

tone1 = scale.index(x)
tone2 = scale.index(y)

#Vytvoříme proměnnou "vysledek", pomocí které spočítáme rozdíl mezi intervaly. Tím zjistíme, kolik je mezi tóny půltónů.

vysledek = tone2 - tone1







