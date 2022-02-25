/**
 * @typedef {(...args: unknown[]) => void} SubscriptionType
 */

/**
 * 
 * @typedef {Object} ObserverType
 * @property {SubscriptionType} notifyAll
 * @property {(subscriptionFunction: SubscriptionType) => void} subscribe
 * @property {(subscriptionFunction: SubscriptionType) => void} unsubscribe
 */

/**
 * 
 * @returns {ObserverType}
 */
export function createObserver() {
  /**
   * @type {SubscriptionType[]}
   */
  const subscriptions = []

  /**
   * 
   * @type  {SubscriptionType}
   */
  function notifyAll(...args) { subscriptions.forEach((subscription) => subscription(...args)) }

  /**
   * 
   * @param  {SubscriptionType} args
   */
  function subscribe(subscriptionFunction) { subscriptions.push(subscriptionFunction) }

  /**
   * 
   * @param  {SubscriptionType} args
   */
  function unsubscribe(subscriptionFunction) {
    const index = subscriptions.findIndex((subscription) => subscriptionFunction === subscription)

    if (index === -1)
      return
    
    subscriptions.splice(index, index + 1)
  }

  const public_ =
    { notifyAll
    , subscribe
    , unsubscribe
    }
  
  return public_
}