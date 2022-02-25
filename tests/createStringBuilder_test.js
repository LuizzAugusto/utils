import { assertEquals } from "../deps/for_test/asserts.js"
import { createStringBuilder } from "../createStringBuilder.js"

Deno.test({ name: "test createStringBuilder", fn: () => {
  const builder = createStringBuilder()

  builder.push("E")
  builder.push("V")
  builder.push("E")
  builder.push("E")
  builder.push("E")
  builder.push("V")
  builder.push("E")
  builder.push("V")
  
  assertEquals(builder.build(), "EVEEEVEV")

  builder.removeIndexOf("V")
  assertEquals(builder.build(), "EEEEVEV")

  builder.removeIndexOf("E")
  assertEquals(builder.build(), "EEEVEV")

  builder.removeLastIndexOf("V")
  assertEquals(builder.build(), "EEEVE")

  builder.removeLastIndexOf("E")
  assertEquals(builder.build(), "EEEV")

  builder.pop()
  assertEquals(builder.build(), "EEE")

  builder.replaceInIndexOf(1, "V")
  assertEquals(builder.build(), "EVE")
}})