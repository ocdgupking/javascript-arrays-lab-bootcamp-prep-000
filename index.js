const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(){
kittens.push("Ralph")
}

function destructivelyPrependKitten(){
kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(){
  kittens.pop("Garfield")
}

function destructivelyRemoveFirstKitten(){
  kittens.shift("Bob")
}

function appendKitten(name){
  kittens = kittens.slice()
  kittens.push("Broom")
  return kittens
}