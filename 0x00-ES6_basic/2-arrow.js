export default function getNeighborhoodsList() {
 let sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this
    this.addNeighborhood = (newNeighborhood) => {
        self.sanFranciscoNeighborhoods.push(newNeighborhood);
        return self.sanFranciscoNeighborhoods;
  };
}
