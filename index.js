// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
return  Math.abs(blocks - 42)
}

function distanceFromHqInFeet(blocks) {
return Math.abs(blocks - 42) * 264
}


function distanceTravelledInFeet(startb, finishb) {
return Math.abs(startb - finishb) * 264
}

function calculatesFarePrice(startb, finishb) {
  distance = distanceTravelledInFeet(startb, finishb)
  let price;
  switch (true) {
    case distance > 2500:
        price = 'cannot travel that far'
        break;
    case distance > 2000:
      price = 25;
    break;
    case distance > 400:
      price = (distance - 400) * 0.02;
    break;
    case distance < 401:
      price = 0;
    break;
  }
  return price
}



// describe('calculatesFarePrice(start, destination)', function() {
//   it('gives customers a free sample', function() {
//     expect(calculatesFarePrice(43, 44)).to.equal(0);
//   });
//
//   it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
//     // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
//     expect(calculatesFarePrice(34, 32)).to.equal(2.56);
//   });
//
//   it('charges 25 dollars for a distance over 2000 feet', function() {
//     expect(calculatesFarePrice(50, 58)).to.equal(25);
//   });
//
//   it('does not allow rides over 2500 feet', function() {
//     expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
//   });
// });
// });
