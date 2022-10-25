/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'produtos',
      [
        {
          nome: 'Camaro',
          peso: 1000,
          marca: 'CHEVROLET',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Apartamento',
          peso: 250.000,
          marca: 'Construir e Inovar',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Fogão 4 Bocas',
          peso: 300,
          marca: 'Inox',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Armário',
          peso: 290.90,
          marca: 'Construtora Toper',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Computador Gamer',
          peso: 4500,
          marca: 'Terabyte',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },

  down() {

  },
};
