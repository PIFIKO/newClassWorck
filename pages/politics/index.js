import style from './politics.module.scss'

const Politics = () => (
    <div className={style.container}>
      <div className={style.wrapperPol}>
        <div className={style.columns}>
          <div className={style.wrapperCol}>
            <div className={style.title}>Колонки</div>
            <button className={style.allCol}>Всі колонки</button>
          </div>
          <div className={style.pepolWrapp}>
            <div className={style.pepol}>
              <div className={style.wrapperFoTex}>
                <img src="/pepool/Avatar.png" alt="Avatar" />
                <div className={style.wrapperTex}>
                  <div className={style.name}>Юлія Стахівська</div>
                  <div className={style.position}>письменниця</div>
                </div>
              </div>
              <h2 className = {style.des}>Жінок в часи небезпеки приваблюють сильні чоловіки</h2>
              <div className={style.time}>04 серпня 15:15</div>
            </div>
              <hr />
            <div className={style.pepol}>
              <div className={style.wrapperFoTex}>
                <img src="/pepool/Avatar.png" alt="Avatar" />
                <div className={style.wrapperTex}>
                  <div className={style.name}>Юлія Стахівська</div>
                  <div className={style.position}>письменниця</div>
                </div>
              </div>
              <h2 className = {style.des}>Жінок в часи небезпеки приваблюють сильні чоловіки</h2>
              <div className={style.time}>04 серпня 15:15</div>
            </div>
              <hr />
          </div>
          <button className ={style.allCols}>Всі колонки</button>
        </div>
        <div className={style.politics}>
          <div className={style.wrapperCol}>
            <div className={style.title}>Політика</div>
            <button className={style.allCol}>Всі новини розділу</button>
          </div>
          <div className={style.wrapperPolNews}>
            <div className={style.bigNews}>
              <img src="/image.jpg" alt="image" />
              <div className={style.timeBig}>05 серпня 11:00</div>
              <div className={style.bigTitle}>У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.</div>
            </div>
            <div className={style.litNews}>
              <div className={style.litNewsCard}>
                <img src="/image.jpg" alt="image" />
                <div className={style.timeBig}>05 серпня 11:00</div>
                <div className={style.litTitle}>У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.</div>
              </div>
              <div className={style.litNewsCard}>
                <img src="/image.jpg" alt="image" />
                <div className={style.timeBig}>05 серпня 11:00</div>
                <div className={style.litTitle}>У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.</div>
              </div>
            </div>
            <div className={style.colNews}>
              <div className={style.colNewsTitle}>Новини розділу</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default Politics;