'reach 0.1';

export const main = Reach.App(() => {
  const Evance = Participant('Evans', {
    // Specify Evans's interact interface here
  });
  const Raphael   = Participant('Raphael', {
   // Specify Raphael's interact interface here
  });
  const Obinna   = Participant('Obinna', {
   // Specify Obinna's interact interface here
  });
  const Mujhtech   = Participant('Mujhtech', {
   // Specify Mujhtech's interact interface here
  });
  deploy();
  // write your program here

});