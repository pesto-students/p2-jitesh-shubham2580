let v;
let adjList;

let Graph=(vertices)=>
{
  
    v = vertices;
    initAdjList();
}

// utility method to initialise
  // adjacency list
let initAdjList=()=>
{
  adjList = new Array(v);

    for (let i = 0; i < v; i++) {
      adjList[i] = [];
    }
}

let addEdge=(u,v)=>
{
  // Add v to u's list.
    adjList[u].push(v);
}

// Prints all paths from
  // 's' to 'd'
let printAllPaths=(s,d)=>
{
  let isVisited = new Array(v);
  for(let i=0;i<v;i++)
    isVisited[i]=false;
    let pathList = [];
    pathList.push(s);
    printAllPathsUtil(s, d, isVisited, pathList);
}


let printAllPathsUtil=(u,d,isVisited,localPathList)=>
{
  if (u == (d)) {
      console.log(localPathList);
      return;
    }

    isVisited[u] = true;

    for (let i=0;i< adjList[u].length;i++) {
      if (!isVisited[adjList[u][i]]) {
        localPathList.push(adjList[u][i]);
        printAllPathsUtil(adjList[u][i], d,
        isVisited, localPathList);
        localPathList.splice(localPathList.indexOf
        (adjList[u][i]),1);
      }
    }

    isVisited[u] = false;
}

Graph(4);
addEdge(0, 1);
addEdge(0, 2);
addEdge(0, 3);
addEdge(2, 0);
addEdge(2, 1);
addEdge(1, 3);

let s = 2;
let d = 3;

console.log(
"Following are all different paths from "
+ s + " to " + d);
printAllPaths(s, d);
  