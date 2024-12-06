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

  let hasUpperCaseLetter = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 65 && ascii <= 90) {
      hasUpperCaseLetter = true
    }
  }
  return hasUpperCaseLetter
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []
  let hasspecialcaracter = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // teste ob in dem Text mindestens 1 Sonerzeichen vorkommt.
    if (
      currentElement === "!" ||
      currentElement === "@" ||
      currentElement === "#" ||
      currentElement === "$" ||
      currentElement === "%" ||
      currentElement === "^" ||
      currentElement === "&" ||
      currentElement === "*" ||
      currentElement === "(" ||
      currentElement === ")" ||
      currentElement === "-" ||
      currentElement === "."
    ) {
      hasspecialcaracter = true
    }
    if (hasspecialcaracter) {
      return true
    }
  }
  return false
}
linkupExerciseHandler('[data-click="aufgabe06"]', aufgabe06)

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

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Suche die Position des dritten `e`s in einem Text.
    if (currentElement === "e") {
      result.push(i)
    }
    if (result.length === 3) {
      return i
    }
  }
  return -1
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

linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result1 = [] // das ist die Resultatliste
  const result2 = []

  let dollarFound = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "$") {
      dollarFound = true
    }
    // wenn du noch kein Dollar gefunden hast dann hänge an Liste result 1 an
    if (dollarFound === false) {
      result1.push(currentElement)
    } else {
      result2.push(currentElement)
    }
  }
  return [result1.join(""), result2]
}
linkupExerciseHandler('[data-click="aufgabe16"]', "aufgabe16")

export function aufgabe17(args) {
  const input = args
  const result = [] // das ist die Resultatliste

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Lesen Sie die Eingabe als Liste ein, Einträge in der Liste werden von einem ',' getrennt
    if (currentElement === ",") {
      result.push(i)
      //Lesen Sie die Eingabe nur bis zum ersten Komma ein
    }
  }
  if (currentElement === ",") {
    return i
  }
  return result
}

linkupExerciseHandler('[data-click="aufgabe17"]', "aufgabe17")

export function aufgabe18(args) {
  const input = args
  const result = [] // das ist die Resultatliste
  const result2 = [] // das ist die Resultatliste
  const result3 = [] // das ist die Resultatliste

  for (let i = 0; i < input.length; i++)
    if (result.length === 3) {
    }
  const currentElement = input[i]
  //Lesen Sie die Eingabe als Liste ein, Einträge in der Liste werden von einem ',' getrennt
  if (currentElement === ",") {
    result.push(i)
    //Lesen Sie die Eingabe nur bis zum ersten Komma ein
  } else if (currentElement === ",") {
    result2.push(i)
    //Lesen Sie die Eingabe nur bis zum zweiten Komma ein
  } else if (currentElement === ",") {
    result3.push(i)
  }
}

export function aufgabe19(args) {
  const input = args
  const result = [] // das ist die Resultatliste

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //jedes zeichen verdoppelen
    result.push(currentElement)
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler('[data-click="aufgabe19"]', "aufgabe19")

export function aufgabe20(args) {
  const input = args
  const result = [] // das ist die Resultatliste

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // prüfen sie ob nach jedem "." ein leerschlag kommt.
    if (currentElement === ".") {
      if (input[i + 1] === " ") {
        return true
      }
      return false
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = [] // das ist die Resultatliste

  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]

    //kehren Sie die Eingabe um
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler('[data-click="aufgabe21]', "aufgabe21")

export function aufgabe22(args) {
  const input = args
  const result = [] // das ist die Resultatliste
  let kFound = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Es sollen alle Zeichen aus der Eingabe mit `_` ersetzt werden, bis zum ersten "k"
    if (currentElement === "k") {
      kFound = true
    }
    if (kFound === false) {
      result.push("_")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler('[data-click="aufgabe22"]', "aufgabe22")

export function aufgabe23(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Das erste Zeichen der Eingabe soll zusätzlich ganz vorne und ganz hinten an der Ausgabe angehängt werden.

    if (i === 0) {
      result.push(currentElement)
    }

    result.push(currentElement)

    if (i === input.length - 1) {
      result.push(input[0])
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args
  const result = []

  if (input.length < 2) {
    return input
  }

  const firstLetter = input[0]
  const lastLetter = input[input.length - 1]

  result.push(lastLetter)

  for (let i = 1; i < input.length - 1; i++) {
    const currentElement = input[i]

    result.push(currentElement)
  }

  result.push(firstLetter)

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Das erste und das letzte Zeichen der Eingabe sollen vertauscht werden
    if (i === 0 || i === input.length - 1) {
      result.push(currentElement)
    } else {
      result.push(input[input.length - 1 - i])
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe26(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Vergleichen Sie die ersten beiden Zeichen der Eingabe und vertauschen Sie diese so dass Sie alphanumerisch sortiert sind
    if (i === 0 || i === 1) {
      result.push(currentElement)
    } else {
      result.push(input[input.length - 1 - i])
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(args) {
  const input = args
  const result = []

  if (input.length === 0) {
    return false
  }
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const asciiCode = currentElement.charCodeAt(0)
    //Testen sie, ob eine Eingabe eine Zahl ist
    if (48 <= asciiCode && asciiCode <= 57) {
    } else {
      return false
    }
  }
  return true
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe28(args) {
  const input = args
  const result1 = []
  const result2 = []

  let secondNum = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    // Testen Sie, ob in der Eingabe 2 Zahlen von einem Leerzeichen getrennt sind. Falls ja geben Sie die Summe als Ausgabe aus; sonst Fehlermeldung.
    if (ascii >= 48 && ascii <= 57) {
      if (secondNum === false) {
        result1.push(currentElement)
      } else {
        result2.push(currentElement)
      }
    } else if (ascii === 32) {
      secondNum = true
    } else {
      return null
    }
  }

  const num1 = parseInt(result1.join(""))
  const num2 = parseInt(result2.join(""))
  return num1 + num2
}

linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)
