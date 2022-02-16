exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments('car_id')
    tbl.text('car_vin').unique().notNullable()
    tbl.text('car_make').notNullable()
    tbl.text('car_model').notNullable()
    tbl.integer('car_mileage').notNullable()
    tbl.text('car_title')
    tbl.text('car_transmission')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
