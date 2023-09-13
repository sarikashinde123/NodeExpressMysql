module.exports = (sequelize, Sequelize) => {
    const TutorialModel = sequelize.define("tutorial", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    },
    {});
    return TutorialModel;
  };