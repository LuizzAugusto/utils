import { assertEquals } from "../deps/for_test/asserts.js"
import { createObserver } from "../createObserver.js"

Deno.test({ name: "test createObserver", fn: () => {
  const observer = createObserver()
  let counter = 1

  observer.subscribe(function subFunction(value) {
    counter += value;

    if (counter > 5)
      observer.unsubscribe(subFunction)
  })
  
  observer.notifyAll(2)
  assertEquals(counter, 3)
  observer.notifyAll(2)
  assertEquals(counter, 5)
  observer.notifyAll(2)
  assertEquals(counter, 7)
  observer.notifyAll(2)
  assertEquals(counter, 7)
}})