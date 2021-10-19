onEvent(`recipes`, event => {

// Heavy Sieve

function hsieve(item, source, rolls) {
    event.custom({
      type: `excompressum:heavy_sieve_generated`,
      input: Ingredient.of(item).toJson(),
      source: source,
      rolls: rolls
    })
  }

hsieve(`excompressum:compressed_gravel`, `minecraft:gravel`, 9)

})