function Node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

export default function LinkedList() {
  let headNode = null;

  // adds a new node the end of the list
  const append = (value) => {
    if (head() === null) {
      headNode = Node(value);
    } else {
      let tmp = head();
      while (tmp.nextNode !== null) tmp = tmp.nextNode;
      tmp.nextNode = Node(value);
    }
  };

  // adds a new node to the start of the list
  const prepend = (value) => {
    let tmp = null;
    if (headNode != null) tmp = headNode;
    headNode = Node(value);
    headNode.nextNode = tmp;
  };

  // returns the total number of nodes in the list
  const size = () => {
    let tmp = headNode;
    let size = 0;
    while (tmp !== null) {
      size += 1;
      tmp = tmp.nextNode;
    }
    return size;
  };

  // returns the first node in the list
  const head = () => {
    return headNode;
  };

  // returns the last node in the list
  const tail = () => {
    let tmp = headNode;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  };

  // returns the node at the given index
  const at = (index) => {
    let tmp = headNode;
    for (let i = 0; i < index; i++) {
      tmp = tmp.nextNode;
      if (tmp == null) return null;
    }
    return tmp;
  };

  // removes the last element from the list
  const pop = () => {
    let current = headNode;
    let next = current.nextNode;

    if (next === null) {
      headNode = null;
      return current;
    }

    while (next.nextNode !== null) {
      current = current.nextNode;
      next = next.nextNode;
    }
    current.nextNode = null;
    return next;
  };

  // returns true if the value is in the list, else return false
  const contains = (value) => {
    let tmp = headNode;
    while (tmp !== null) {
      if (tmp.value === value) return true;
      tmp = tmp.nextNode;
    }
    return false;
  };

  // returns the index of the node containing value, or null
  const find = (value) => {
    let tmp = headNode;
    let index = 0;
    while (tmp != null) {
      if (tmp.value === value) return index;
      tmp = tmp.nextNode;
      index++;
    }
    return null;
  };

  // represents LinkedList objects as strings
  const toString = () => {
    let tmp = headNode;
    let string = "";
    while (tmp !== null) {
      string += `( ${tmp.value} ) -> `;
      tmp = tmp.nextNode;
    }
    return `${string}null`;
  };

  // inserts a new node with the provided value at the given index
  const insertAt = (value, index) => {
    if (index > size() - 1) {
      append(value);
      return;
    }

    if (index <= 0) {
      prepend(value);
      return;
    }

    const newNode = Node(value);
    const formerNode = at(index - 1);

    newNode.nextNode = formerNode.nextNode;
    formerNode.nextNode = newNode;
  };

  // removes the node at the given index
  const removeAt = (index) => {
    if (headNode === null) return;

    if (index <= 0) {
      headNode = headNode.nextNode;
      return;
    }

    if (index > size() - 1) {
      pop();
      return;
    }

    const latterNode = at(index + 1);
    const formerNode = at(index - 1);

    formerNode.nextNode = latterNode;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}
