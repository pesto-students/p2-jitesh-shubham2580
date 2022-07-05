  let V; 
  let adj;
  V = 4;
    adj = new Array();
    for (var i = 0; i < V; i++)
      adj.push(new Array());
  

  
  function addEdge(v , w) {
    adj[v].push(w);
    adj[w].push(v);
  }

  let isReachable=(s , d)=> {
    
    if (s == d)
      return true;
    let visited = new Array(V).fill(false);
    let queue = new Array();
    visited[s] = true;
    queue.push(s);

    while (queue.length != 0)
    {
      s = queue.pop();

      for (let i = 0; i < adj[s].length; i++) {

        if (adj[s][i] == d)
          return true;

        if (!visited[adj[s][i]]) {
          visited[adj[s][i]] = true;
          queue.push(adj[s][i]);
        }
      }
    }

    return false;
  }

    addEdge(0, 1);
    addEdge(0, 2);
    addEdge(1, 2);
    addEdge(2, 0);
    addEdge(2, 3);
    addEdge(3, 3);

    var u = 1, v = 3;
    if (isReachable(u, v))
    console.log("There is a path from " + u + " to " + v);
    else
    console.log("There is no path from " + u + " to " + v);


