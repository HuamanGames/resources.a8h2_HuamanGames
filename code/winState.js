
Mario.WinState = function() {
    this.waitTime = 2;
    this.drawManager = null;
    this.camera = null;
    this.font = null;
    this.Image = null;
    this.wasKeyDown = false;
};

Mario.WinState.prototype = new Enjine.GameState();

Mario.WinState.prototype.Enter = function() {
    this.drawManager = new Enjine.DrawableManager();
    this.camera = new Enjine.Camera();
    
    this.font = Mario.SpriteCuts.CreateWhiteFont();
    this.font.Strings[0] = { String: "You Won!", X: 106, Y: 160 };
    
    this.Image = new Enjine.AnimatedSprite();
    this.Image.Image = Enjine.Resources.Images["enemysheet"];
    this.Image.X = 112;
    this.Image.Y = 52;
    this.Image.SetColumnCount(2);
    this.Image.SetRowCount(1);
    this.Image.AddNewSequence("loop", 0, 0, 0, 1);
    this.Image.PlaySequence("loop", true);
    this.Image.FramesPerSecond = 1/2;
    
    this.waitTime = 2;
    
    this.drawManager.Add(this.font);
    this.drawManager.Add(this.Image);
};

Mario.WinState.prototype.Exit = function() {
    this.drawManager.Clear();
    delete this.drawManager;
    delete this.camera;
};

Mario.WinState.prototype.Update = function(delta) {
    this.drawManager.Update(delta);
    
    if (this.waitTime > 0) {
        this.waitTime -= delta;
    } else {
        if (Enjine.KeyboardInput.IsKeyDown(Enjine.Keys.S)) {
            this.wasKeyDown = true;
        }
    }
};

Mario.WinState.prototype.Draw = function(context) {
    this.drawManager.Draw(context, this.camera);
};

Mario.WinState.prototype.CheckForChange = function(context) {
    if (this.waitTime <= 0) {
        if (this.wasKeyDown && !Enjine.KeyboardInput.IsKeyDown(Enjine.Keys.S)) {
            context.ChangeState(new Mario.BowserLevel());
        }
    }
};