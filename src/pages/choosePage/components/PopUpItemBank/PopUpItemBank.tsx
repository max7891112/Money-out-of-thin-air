import clsx from "clsx";
import { Button } from "../../../../UI/Button/Button";
import { LogoAndInfoBank } from "../../../../UI/logoAndInfoBank/LogoandInfoBank";
import { CrossSvg } from "../PopUp/UI/crossSvg/CrossSvg";
import style from "./popUpItemBank.module.scss";

export const PopUpItemBank = () => {
  return (
    <div className={clsx(style.wrapper, "_gray-background")}>
      <div className={style.upPart}>
        <div className={style.leftUpPart}>
          <LogoAndInfoBank
            cardBank="Platinum Premium"
            nameBank="Т-банк"
            fontSize="26px"
          />
        </div>
        <div className={style.rightUpPart}>
          <CrossSvg />
        </div>
      </div>
      <div className={clsx(style.mainBlock, "_white-color")}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsa
        esse nobis veniam quasi maxime perferendis quod natus rerum libero
        blanditiis delectus nesciunt modi neque quas, veritatis rem fuga
        sapiente hic! Exercitationem tempora dolores molestiae voluptatum
        ducimus corrupti aspernatur! Sequi itaque dignissimos earum. Rerum
        similique modi, quia laborum ipsa, ipsum perferendis, labore et quis
        iusto voluptate quas ab cupiditate ducimus vero tenetur libero velit!
        Beatae iusto officiis repellat accusamus culpa neque praesentium iure
        nisi blanditiis pariatur, rerum quas rem itaque dolorem, minima
        perferendis doloribus. Magnam quam repellat eaque, ipsum ad voluptatum
        sequi dolorum dolores et labore modi maxime quaerat ex. Tempore mollitia
        rem temporibus maxime autem? Nihil, quos magnam. Repellat officia magni,
        accusamus nisi fugit, repudiandae non laborum iste unde eius magnam
        exercitationem perferendis aliquam temporibus harum nam deserunt. Cumque
        praesentium distinctio sunt voluptatum, fugiat unde deleniti nam optio
        quibusdam libero accusamus ipsum ipsam fugit ab nulla provident corrupti
        atque! Ad culpa sunt cumque omnis. Cupiditate, sequi eaque vero possimus
        quam doloribus modi assumenda rem voluptate totam unde blanditiis
        praesentium nobis in deleniti consequatur suscipit excepturi, quaerat ab
        soluta porro vel. Minima ipsam doloribus officiis quae odio commodi
        deserunt numquam at laudantium sapiente! In laboriosam perferendis
        repellendus totam, obcaecati qui. Minima impedit alias, cum consequatur
        quibusdam sapiente excepturi perferendis quia. Quos doloremque facilis
        ipsum. Ipsa cumque libero fugiat et, temporibus pariatur, nemo fuga
        saepe alias minus expedita dolorem ullam cum doloremque aspernatur
        laborum repudiandae! Placeat veritatis minus neque eaque illum sunt iure
        voluptas adipisci a? Iure, enim? Error quia vero, numquam nam nemo amet
        ut rerum! Vitae explicabo blanditiis sint perferendis vel quas voluptas
        ipsam esse, recusandae reiciendis, voluptatum doloremque id veritatis,
        minima ad. Dicta quas modi harum tempora quasi debitis reiciendis nisi
        tenetur nulla. Ad earum eveniet asperiores expedita omnis atque
        voluptatum alias illum non praesentium obcaecati eaque quam, corporis
        quae optio voluptatibus repudiandae. Incidunt, accusantium et facere
        iste, sit rerum inventore dignissimos sapiente quaerat magnam
        asperiores. Assumenda quas earum, nam odit, vitae dicta voluptatibus
        consequuntur unde quia ad dolore accusantium quo at, ipsam corporis
        minus quod placeat doloribus. Vitae, ut est pariatur architecto ad eos
        at officiis porro asperiores aspernatur perferendis neque eius illum
        omnis laborum fuga saepe vel necessitatibus tempore laboriosam sed rem
        et! Consequatur sit ex similique, veritatis fuga impedit ea adipisci
        voluptatem odio error fugiat et qui quas necessitatibus beatae eaque
        modi nisi voluptate! Doloremque praesentium aut saepe repellat cum alias
        nisi odit sed voluptas quasi perspiciatis neque sequi vitae obcaecati
        eaque, autem quod quae deserunt ullam hic dolor sit. Reiciendis
        quibusdam repellat, provident id minus laborum! Corporis error placeat
        quas facilis esse, temporibus illum veritatis reiciendis tempora,
        aspernatur nulla et modi obcaecati explicabo dolor provident maiores
        ullam sunt, harum commodi dicta? Aliquid nemo beatae possimus cupiditate
        omnis autem consectetur in molestiae! Minus et ad, id odit fuga non
        laudantium rem velit eos dolorum reiciendis nihil possimus, aliquam
        sequi repellat unde consequatur, minima quos recusandae tempora ab
        quibusdam. Eos vero ex, pariatur corporis recusandae ducimus doloremque
        quidem quisquam obcaecati amet molestiae consectetur ipsa possimus
        totam!
      </div>
      <div className={style.downPart}>
        <Button padding="10px 30px" text="Перейти на сайт" variant="green" />
      </div>
    </div>
  );
};
