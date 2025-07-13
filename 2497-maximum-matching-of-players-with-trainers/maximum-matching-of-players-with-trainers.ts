function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
    let ans = 0
   players.sort((a, b) => a - b);
trainers.sort((a, b) => a - b);

    let i=0;
    let j=0
    while(i<players.length && j<trainers.length){
      if(players[i]<=trainers[j]){
        ans++;
        i++;
        j++
      }
      else{
        j++
      }
    }
    return ans
};