
export const Resources = {
    Sword: new ex.ImageSource('/src/res/sword.png')
}

export const loader = new ex.Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}