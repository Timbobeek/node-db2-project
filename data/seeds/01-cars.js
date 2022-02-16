// STRETCH
const cars = [
  {
    vin: '12345678911111111',
    make: 'lada',
    model: 'samara',
    mileage: 666000,
    title: 'clean',
    transmission: 'manual'
  },
  {
    vin: '12345678911111111',
    make: 'vw',
    model: 'jetta',
    mileage: 120000,
    title: 'salvage',
  },
  {
    vin: '12345678911111111',
    make: 'chevy',
    model: 'corolla',
    mileage: 666
  }
]

exports.seed = function(knex){
  return knex('cars')
  .truncate().then(()=>{
    return knex('cars').insert(cars)
  })
}
