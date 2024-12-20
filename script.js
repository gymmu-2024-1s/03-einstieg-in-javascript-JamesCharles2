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
  const result = []

  // Wir filtern die Eingabe so, dass nur noch Buchstaben und Leerzeichen übrig bleiben
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 65 && ascii <= 90) {
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      result.push(currentElement)
    } else if (ascii === 32) {
      result.push(currentElement)
    }
  }
  // Jetzt könnten wir noch mehrere Leerzeichen am Stück haben, die müssen wir noch filtern

  const result2 = []
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    if (currentElement === " " && nextElement === " ") {
      // hier sind 2 Leerzeichen hintereinander, wir ignorieren das erste
    } else {
      result2.push(currentElement)
    }
  }
  // jetzt können wir die Leerzeichen zählen
  let count = 0
  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]
    if (currentElement === " ") {
      count++
    }
  }
  // da es ein wort mehr wie leerzeichen gibt, geben wie leerzeichen +1 zurück
  return count + 1
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

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
  const totallist = [] // das ist die Resultatliste
  const currentlist = [] // das ist die Resultatliste
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // wenn wir auf ein Leerzeichen treffen , dann schreiben wir alles was wir bis jetzt haben in die totalliste
    if (currentElement === ",") {
      totallist.push(currentlist.join(""))
      currentlist.length = 0
    } else {
      currentlist.push(currentElement)
    }
  }
  // wir schreiben alles was wir noch bis zum Ende gelesen haben in die liste
  totallist.push(currentlist.join(""))

  return totallist
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

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

    // Das mittlere Zeichen der Eingabe soll gelöscht werden. Wenn die Anzahl Zeichen gerade ist, sollen die beiden mittleren Zeichen gelöscht werden.

    if (input.length % 2 === 0) {
      if (i === input.length / 2 - 1) {
        continue
      }
      if (i === input.length / 2) {
        continue
      } else {
        result.push(currentElement)
      }
    } else {
      if (i === Math.floor(input.length / 2)) {
        continue
      }

      result.push(currentElement)
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

export function eigeneAufgabe1(args) {
  const input = args // Der Eingabetext
  const result = []
  let count = 0 // Zähler für das zweite Zeichen

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] // Aktuelles Zeichen

    // Wenn das Zeichen ein Leerzeichen ist, ersetze es mit 'F' und zähle es
    if (currentElement === " ") {
      result.push("F")
      count++ // Leerzeichen zählt auch
    } else {
      // Überprüfe, ob es sich um das zweite Zeichen handelt
      if (count % 2 !== 0) {
        // Wenn es noch kein Großbuchstabe ist, wandle es um
        if (currentElement !== currentElement.toUpperCase()) {
          result.push(currentElement.toUpperCase())
        } else {
          result.push(currentElement) // Wenn es bereits ein Großbuchstabe ist, bleibt es gleich
        }
      } else {
        result.push(currentElement) // ansonsten bleibt das Zeichen unverändert
      }
      count++ // Zähler erhöhen
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=eigeneAufgabe1]", eigeneAufgabe1)

export function eigeneAufgabe2(args) {
  const input = args
  let sum = 0 // Variable, um die Summe der gefundenen Zahlen zu speichern
  let hasNumber = false // überprüft ob eine Zahl vorhanden ist
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] //Aktuelles Element
    // Versuche jedes Zeichen in der aktuellen Zeichenkette auf Zahl zu prüfen
    for (let j = 0; j < currentElement.length; j++) {
      const currentChar = currentElement[j] //Aktuelles Zeichen

      // überprüfe ob das Zeichen eine Zahl ist
      if (!isNaN(currentChar) && currentChar !== " ") {
        sum += parseInt(currentChar) // Zahl zur Summe hinzufügen
        hasNumber = true // Zahl wurde gefunden
      }
    }
  }
  // wenn eine Zahl gefunden wurde gebe die Summe zurück ansonsten gebe s zurück
  if (hasNumber) {
    return sum
  } else {
    return "s"
  }
}

linkupExerciseHandler("[data-click=eigeneAufgabe2]", eigeneAufgabe2)

export function eigeneAufgabe3(args) {
  const input = args
  const result = []
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  let count = 0 //Zähler für Vokkale

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // wenn das zeichen ein Vokal ist
    if (vowels.includes(currentElement)) {
      count++ // Zähler erhöhen
    } else {
      result.push(currentElement)
    }
  }
  return count // Rückgabe der Anzahl der Vokale
}

linkupExerciseHandler("[data-click=eigeneAufgabe3]", eigeneAufgabe3)
export function bubblesort(args) {
  const text = args
  const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    // Vergleiche die ASCII-Werte der beiden benachbarten Zeichen
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Wenn der ASCII-Wert des aktuellen Zeichens größer ist als der des nächsten müssen die beiden Zeichen vertauscht werden.

      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i + 1]
      list[i + 1] = list[i] // Tausche das aktuelle Element mit dem nächsten
      list[i] = tmp
      // Wenn ein Tausch stattgefunden hat, starte die Schleife von vorne
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")
  return result
}

linkupExerciseHandler("[data-click=bubblesort]", bubblesort)

export function Insertionsort(args) {
  const text = args
  const list = text.split("") // Text in eine Liste von Zeichen umwandeln

  // Beginnt den Sortierprozess ab dem zweiten Element der Liste
  for (let i = 1; i < list.length; i++) {
    const currentElement = list[i] // Das aktuelle Element, das an die richtige Stelle eingefügt werden soll
    let j = i - 1

    // Verschiebt Elemente, die größer als currentElement sind, nach rechts
    while (j >= 0 && list[j].charCodeAt(0) > currentElement.charCodeAt(0)) {
      const tmp = list[j + 1] // Temporäre Variable zum Tauschen der Elemente
      list[j + 1] = list[j] // Verschiebe das Element nach rechts
      list[j] = tmp // Setze das aktuelle Element an die richtige Stelle
      j--
    }
  }
  const result = list.join("") // Wandelt die sortierte Liste zurück in einen String

  return result // gebe das Sortierte Ergebnis zurück
}

linkupExerciseHandler("[data-click=Insertionsort]", Insertionsort)

export function Bucketsort(args) {
  const text = args
  const list = text.split("") // Den Text in eine Liste von Zeichen umwandeln
  const buckets = []

  // Erstelle 26 Buckets (einen für jeden Buchstaben
  for (let i = 0; i < 26; i++) {
    buckets.push([]) // Füge leere Buckets hinzu
  }

  // Verteile jedes Zeichen in den entsprechenden Buckets (basierend auf ASCII-Wert)
  for (let i = 0; i < list.length; i++) {
    const currentElement = list[i]
    const bucketIndex = currentElement.charCodeAt(0) - 97 // Berechne den Index des Buckets anhand des ASCII-Werts

    // Falls der Index im Bereich der 26 Buckets liegt
    if (bucketIndex >= 0 && bucketIndex < 26) {
      buckets[bucketIndex].push(currentElement) // Füge das Zeichen in den entsprechenden Bucket ein
    }
  }

  //Sortiere die Zeichen in jedem Bucket
  for (let i = 0; i < buckets.length; i++) {
    buckets[i].sort() // Sortiere die Zeichen im aktuellen Bucket aphabetisch
  }

  // Kombiniere die sortierten Buckets zu einem endgültigen Ergebnis
  let result = ""
  for (let i = 0; i < buckets.length; i++) {
    result += buckets[i].join("") // Füge die Zeichen jedes Buckets zu einem String zusammen
  }

  return result
}

linkupExerciseHandler("[data-click=Bucketsort]", Bucketsort)
