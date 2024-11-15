import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]
    if (currentElement === "e") {
      //du nothing
    } else if (currentElement === "E") {
      // auch E ignorieren
    } else {
      result.push(currentElement)
    }

    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = [] // das ist die Resultatliste

  //läuft zeichen für zeichen über den ganzen Text
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    const upperCaseVersion = currentElement.toUpperCase()

    result.push(upperCaseVersion)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElemnt = input[i]
    if (currentElemnt === "e") {
      count = count + 1
    } else if (currentElemnt === "E") {
      count = count + 1
    }
  }
  //zähle eins hoch
  return count
}

linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
}

export function aufgabe05(args) {
  const input = args
  const result = []

  let hasUpperCaseLetter = false
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const upperCaseVersion = currentElement.toUpperCase()
    if (currentElement === "." || currentElement === ".") {
      // sonderzeichen ignorieren
    } else if (currentElement === upperCaseVersion) {
      hasUpperCaseLetter = true
    }
  }
  return hasUpperCaseLetter
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wandle in einen grossbuchstaben um
    const upperCaseVersion = currentElement.toUpperCase()
    // Wandle in einen kleinbuchstaben um
    const lowerCaseVersion = upperCaseVersion.toLowerCase()
    // Prüfe ob gross und klein gleich sind
    if (upperCaseVersion === lowerCaseVersion) {
      // gib true zrück
      return true
    }
  }
  // gib falsch zurück
  return false
}

export function aufgabe07(args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "u") {
      // prüfe ob das nächste element ein n ist
      const nextElement = input[i + 1]
      if (nextElement === "n") {
        // prüfe ob das dritte element ein d ist
        const nextNextElement = input[i + 2]
        if (nextNextElement === "d") {
          // gib true zrück
          return true
          // wenn kein und gefunden wurde, gib false zrück
        }
      }
    }
  }

  // gib false zurück
  return false
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // ersetze e mit einer 3
    if (currentElement === "e") {
      result.push("3")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  const result = [] // das ist die Resultatliste

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Teste ob eine Eingabe genau sechs Zeichen lang ist
    if (input.length === 6) {
      return true
    }
  }
  return false
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const result = [] // das ist die Resultatliste

  // Teste ob input genau 7 zeichen lang ist
  if (input.length === 7) {
    //return true
  } else {
    return false
  }

  // Teste ob das erste Zeichen ein # ist
  if (input[0] === "#") {
    //return true
  } else {
    return false
  }

  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]

    //Teste ob eine Eingabe ein korrekter RGB Hexcode ist.
    if (
      currentElement === "0" ||
      currentElement === "1" ||
      currentElement === "2" ||
      currentElement === "3" ||
      currentElement === "4" ||
      currentElement === "5" ||
      currentElement === "6" ||
      currentElement === "7" ||
      currentElement === "8" ||
      currentElement === "9" ||
      currentElement === "A" ||
      currentElement === "B" ||
      currentElement === "C" ||
      currentElement === "D" ||
      currentElement === "E" ||
      currentElement === "F"
    ) {
      //return true
    } else {
      return false
    }
  }

  return true
}

linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args
  const result = [] // das ist die Resultatliste
  //teste ob input länger als ein zeichen ist

  if (input.length === 1) {
    return input.charCodeAt(0)
  } else {
    return null // gib null zruck
  }
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  const result = [] // das ist die Resultatliste

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      return i
    }
  }
  return -1
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  const result = [] // das ist die Resultatliste

  let pos = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Suche die Position des letzten `e`s in einem Text.
    if (currentElement === "e") {
      pos = i
    }
  }
  return pos
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  const result = [] // das ist die Resultatliste
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Suche die Position des dritten `e`s in einem Text.
    if (currentElement === "e") {
      count = count + 1
      if (count === 3) {
        return i
      } else {
        return -1
      }
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = [] // das ist die Resultatliste
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Suche die Position des dritten `e`s in einem Text.
    if (currentElement === "e") {
      count = count + 1
    }
  }
  return count
}
