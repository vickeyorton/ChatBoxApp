import React from "react";
import "./ChatList.css";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export default function ChatList() {
  return (
    <div className="ChatList">
      <div className="ChatList__Header">
        <div className="ChatList__Header__Search">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className="ChatList__Header__Search__Text"
          />
        </div>
      </div>
      <div className="ChatList__Content">
        <div className="ChatList__ContactList">
          <div className="ChatList__ContactList__Avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://www.google.com/s2/u/0/photos/private/AIbEiAIAAABECKTlyteOhJj2xgEiC3ZjYXJkX3Bob3RvKig2MGE2NDAxMzM3ZDcwNjJiNjBmMDk5ZDc5ZTVkYjg0MWYwNTFhN2NjMAE7dFdVXARFOZLADwImOn9NbllXqg?sz=40"
            />
          </div>
          <div className="ChatList__ContactList__Info">
            <div className="ChatList__ContactList__Name">
              <span className="ChatList__ContactList__FullName">
                Aishwarya Moharir
              </span>
              <span className="ChatList__ContactList__NameDot">
                <MoreHorizIcon />
              </span>
            </div>
            <div className="ChatList__ContactList__MessInfo">
              <span className="ChatList__ContactList__LastMessage">
                Thanks again you have been
              </span>
              <span className="ChatList__ContactList__seenTime">12min</span>
            </div>
          </div>
        </div>
        <div className="ChatList__ContactList">
          <div className="ChatList__ContactList__Avatar">
            <Avatar
              alt="Claire Sharwood"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8U8hgDNI8wVGG1rgBCaFQh4BLSavnoQVvpA&usqp=CAU"
            />
          </div>
          <div className="ChatList__ContactList__Info">
            <div className="ChatList__ContactList__Name">
              <span className="ChatList__ContactList__FullName">
                Claire Sharwood
              </span>
              <span className="ChatList__ContactList__NameDot">
                <MoreHorizIcon />
              </span>
            </div>
            <div className="ChatList__ContactList__MessInfo">
              <span className="ChatList__ContactList__LastMessage">
                Your are Dope man....
              </span>
              <span className="ChatList__ContactList__seenTime">19min</span>
            </div>
          </div>
        </div>
        <div className="ChatList__ContactList">
          <div className="ChatList__ContactList__Avatar">
            <Avatar
              alt="Remy Sharp"
              src="data:image/jpeg;base64,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"
            />
          </div>
          <div className="ChatList__ContactList__Info">
            <div className="ChatList__ContactList__Name">
              <span className="ChatList__ContactList__FullName">
                Shaun Gardner
              </span>
              <span className="ChatList__ContactList__NameDot">
                <MoreHorizIcon />
              </span>
            </div>
            <div className="ChatList__ContactList__MessInfo">
              <span className="ChatList__ContactList__LastMessage">
                Thank you Dude
              </span>
              <span className="ChatList__ContactList__seenTime">24min</span>
            </div>
          </div>
        </div>

        <div className="ChatList__ContactList">
          <div className="ChatList__ContactList__Avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://i.pinimg.com/originals/cc/2e/c7/cc2ec7995c93eee63d7c2f1e5ecab101.jpg"
            />
          </div>
          <div className="ChatList__ContactList__Info">
            <div className="ChatList__ContactList__Name">
              <span className="ChatList__ContactList__FullName">
                Kirsten Mckellar
              </span>
              <span className="ChatList__ContactList__NameDot">
                <MoreHorizIcon />
              </span>
            </div>
            <div className="ChatList__ContactList__MessInfo">
              <span className="ChatList__ContactList__LastMessage">
                I will be their with you to enjoy party
              </span>
              <span className="ChatList__ContactList__seenTime">34min</span>
            </div>
          </div>
        </div>
        <div className="ChatList__ContactList">
          <div className="ChatList__ContactList__Avatar">
            <Avatar
              alt="Remy Sharp"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIWFRUXFxUVFRUVFxcWFxcVFRcWGBgVFRUYHSggGBolGxcVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGC0dHR8rLS0tKy0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tKystLS0rLTc3N//AABEIAPsAyQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAEDBQYCB//EAEIQAAEDAgMFBQYEBAQFBQAAAAEAAhEDIQQxQQUSUWFxBiKBkaETMlKx0fAjQmLBBxSS4VNygqIzQ7LC8QgVFsPz/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAIDAQQF/8QAJBEBAQACAgICAgIDAAAAAAAAAAECEQMhEjFBUQQyM0ITFCL/2gAMAwEAAhEDEQA/AIwnSSTlOkkkEA4CeEgnQCTpJ4QDpJLmtVa0bziGjiVgdrkqmr9omZU2l3M2H1Qr9tVTlujoJ+aS8uMVx4cq0gC6AWYG0a3+IfJo/ZT09qVR+aeoH0U/9jE9/HyaKElVUNsz7zfEfQqxo12vHdPhr5KmPJjl6qWXHlj7jtJdQmKchgnTgJ0AwCYhdJkAwCUJwE8LQQCaF0AnWAAE6cBJaDJwknCAcJ0gnQDBdBILmtVDGlxyAlACbW2myg2XXcfdbqeZ4BYzGY99Z2889AMh0Cg2pinVKhe43Py0CipuUM8q6+LCCWORLaqARVJc2TrkgprzopqYK4oslHUaChlTacMap6TnC4XbaKk9klmWqLjKsMDtAO7rrHQ8f7o+FnHthWuzcVvDdOYyPELv4Oby6rh5uHx7g5JJKF0uUydKE8IBkk6dANKSeEt1ABJJJwtB0oSCdAIJ0gnQDhNtTBE4Zz8pMDSd259YCcLZbZ2ROz6UAyGMcQNS4bx9SgR4BjGw4pUAjdrYfdc4xllpxQ1BtiuXk6ehxdum3KKpsQWFN1YURKhn0vjR+HarKhTQeDCvMJh1za2e3SFmHlduoxorfDUm8E+Jw4hNeLon+Rn6tNQAlhDhp9wrPFUFXv4LMN41uWrF6xwIBGRv5rpC7NMsjhbwzRcL18buSvJznjbDQnhOmWlNCdOlCAZPKSSAAC6SATwtBk4CchIIB4ThIJ0AiF6viRFFrRFmsz1gCB98l5TC9Qf36FIxM02E8MgfqsZfTx7tjsy8ADUWGov9SsLTMEg6W8l6/tKmHzaXNJInPvLybbzdyu4RGRU+bHcdP4+eug4B3lY0eKr6bslY4c2XHyenfjFpgYBBWhwtWQs5h3Qr7BgwpYjOLNrxw8ly+tpdRUyQmrOVL6SQ4l6rMRmj65OUdEDXChkrIP2Q6x8P3ViqrYeT+oHzVqvT4P0jzef96ZJOmVUiSTpIBoTwkE6ABCdMktB06ZdBAOo8TiG02OqPO61oJJ5DgNTyUiqe1VPewzhzaT4H6wst1Nmwx8spAOzu2FOoYcwtHEHej/M2AfELWbf/AIpUcKzD0KdMV5oNJeyo0BjjLQ0gAneG7JBheJUC5n4jTrcclddntjjaONoYcO3faEh7gLhrGue4gfFutMcyEkyuz5YY638vUtlAVqDcZLx7RogP7pgWm2d8jPNYvtNTklzgDEiTmCc91eo9sqFPDURTpt3WNYxjABk1ogDnYBebYh7alPecRnfnnf79U2ReO/LLU3Iuk+EHiQGvMZTnoicLUaTHzXHyYvR485Yudnu3jC02DBj70WbwtLduFfYLFQQCJXPD5LMBM6lP/hR1MSLxdcU8XdbaTVRYgQgK7uKt8RWa4fMqoxrmAE7wHVSyn0pL9jNhe6/qPkrRVHZ6qHB8GRI/f6K3XqcH8ceZz/vTJQnSVUiTJykgEE6ZPCAASTpLQQXSYBdBAJcYrDh7HMP5gR0Oh81IuggS6eUYmm0UzA3d0Na5vBwaA7zcHHxXpP8AAPANbXxpc0e1pspASLsDjU3wOB7oB6LB9utnmnWLgCG1JcDoct4c4cfULff+nnEguxxd7+5QJPEA1fWYUsZpbly3IuP4oYkilPj5RF+MfJeNVsdVaQ8GR8J90jgQvV/4sO3hDeIOn3qvMaNEOEI5cvG7NwYeeOg+1NqCs4blMtGjfU3TYTFDeFMgtJIG8XBrRORcXEADmYUjcMRYDvNMtVzsqrg3OBxdA7wIyLgD1gfspZZxWcWcnXsPjKOKpU6dcseKVUA032INtd2YPVSYbb9UNktBHELb7b7QsxjWUmU4osEBgB3bCGnetuxoAFla2Cpss0TGZOs6qGeeHzFeLDL5ojZm19/KSehXeK2i5sy0/fNEdmKbS7JEY6g0uILQ43icp0PJQ6Xu9sxiNqyQHVt2bBre8TOkAIk4YNYatQVtxrnU3OdTIDXtN2ut3YkZwo8bSoVT7Os11EsJjda3WJk2mc8lc/z9JuFGCw7e4TLyTvFxOZNgBkMlbeMx+Ucsc7l6mhvZOk32bnt915EeAz9VdlVvZ2kG0YGW8Y9FZru4/wBY8/l/ekE0p5TFOQkkgnAQCTpJ0AAkkktB04TBdBAOnCZOEBSdq9iOxLG7jgHs3oDpAIdEiQDGQVl/CzYLsE3E1KjgajmNBDbta0EnUXM8kUj9mSW1QMzTnyc36lEnYt60o9rVg5zw4WbfwPXWV5+5+7UcAIE2HLmtjj2vBI4t1iJM8uQWBxVQioZ8f7pOXHcX4MvGtRgwx8Ei6sGYdpMC/VZXBYrK61Gy6kwTdeZlh416W9zcWnsYYYEaFUG1sY1st1NlP2k2sabLWLjDcrzmT09VS4fBmq0FxvmJIC3x63WYrjs5W3TJ1VnUdLyeOSB7O06e/u1HRGassfSbvEMMjPwU77Plo+MwjKgBc0TGaBqUWsFhCNw2IJaQdPXgUP7P2jw3z6DNUs8uojvx7q32TT3aTed/Myi0gkvTxmpI8vK7tpkkl0tYYJ4SCdAMknTIAFJJJaDroLldBAOnlNKSA6CIwdfdJPFrh6T+yHCA2ltelRcym93fqkMY0Z947u8eDZKIHeLIc/lnbr9+S812+PxTHPw4rXvxpEzmAQT8ugWJ2m4+1dP3zWZ9qYzR8A661WzquiyeEdALlebKfAJOZ+7eC4uXHfbu4stY6WO2sGyuG3gtNiB8wunbBoVGAPEPyDmFw8SCYUTakFWeGeLeCluz5Pda9BMB2bfTP/FJbOZHejqp8fstpcCypVB1O+IH+kC/mtEX5RlCrKzroy97EyutBsQ4NiCcok5nmVY7Bpd01Dm6w/yj+8+SpceTIaM8lq8PS3GtbwACr+PhvLf0h+Tn/wA6+0gCSdMu1wEE6QSQ0gnSSCAQTpBJAV4XS5CcLQcJ0k6AScBMAnc4DMgdUB20LyvtjjC7aLiDIY6k1g5MDcupk+K9T9o1ocSY7ro6kED1K8e26S3El54teOYbA/7UlvZ5Omm2xX9liHA5SJ8gqLb9MB4M2IzVt27eHOFRp7rmteDxDhKzTcV7SnuuPebkeLb28FtNsbVwpBIb7sB1/hkADr9Val24wO8FUU8fNENObS1vg0yPT5Il2KmOChyRfhy67SMa8uJbUEdCD4hWWG2fXeJaQ/iN6DwgDVVrMODdpIKssDXxDPdLXdQp3KLzHQ6gzEhkRUa05yQBaRmo/wCYrM94AjqD5SpDtWu4brm0x0n5Idz7yTJ05KWWUbIsMA7eqMcRMQ4/t6wrWv2mwrLGpJygNcSI4iLLhuyX4c0i/OtR9rumxEP3Q3ruuaTzKo+0fZ81CatEd+O834uBH6lTh5PHpz8mMy7bHB4plVu/TcHNOo+RGhU68gwW0atF/dc6m4GCMvAjVanB9tXgD2lIO5tO76QV1zP7c94/ptklSYLtTh6kAk0z+rL+oK6aQbgyNCmllJcbPZ06YLpDDJSnToCvC6TBCbU2nTw7N+o6OA1ceAC3YGKn2h2nwtEwam874WDe9cvVY7bO3q9exPsqejBmR+rU+gVI2mCePX6JPI8wX+1O2VV7j7FzqbdAA2erjdUO09q18QQKjy6MrAC2sC0pqzYEDx5IrZWEkTEk/RLbo/j3ppMJt2nNJg7lNrAxodeLQZOpJ1VZ2sph7w7MEZjK+o48UPiMIY++ir20yDBk8PNLOzWfAmtjN6gKD7Ppd1p+JmbY8/KFSCQei0eI2aa1LfYPxKYggfmYOHEi6ofZppltOyxJQO9yOo/cI9gIInwKqzQcLhEUcVo7wKLDY3TXbMqNiLLR0toU2iI++Cw2CxQ4/urJmJJyBPguTKWV2SyxosXVpvuAPKFcdguywxFT21UfhMd3WnJ7xof0i08ZA4oLst2Sr4oCo53s6U55ucBnuDLO0leubMwbKNNtOmIa0QBy66nmp29kzz1NRif4kuAxWGbaRRrnqN6mB6yqTdkZ8ZBPVRdpNq+32piYkso06VBsanfDnm36j/tUnsm6GR16CD5Is0XH0z/abYorN9owRUaOm8Ph+n91h21S2A7wOn9l6qaec9J/85wsD2lwApVyDBbUl45OnvDzv4q3FnvqsynzALHK12RtqrQPdMs1Yfd8OB6LPiWGMwi6bwRIV/Q6vVeobJ21SrjumHRdh94fUdFYrySlVLSHNJBFwRmCtTsvti4HdriR8bRBHUa+CeZ/aOfF9NnCUqDB42nVG9TeHDkcuozCnT7RUm0tpMotlxubNbN3HksTtfHOc72lQA1DZo/wxNgAdeaW65z/AOYxDpM9xpOZH5gDkBoh6lUl29EmbaD+/VSuW3ThhJFecO90ucd0HjmfBdU2AZCPvVS1KkkyZPLIZ2C5qWBWGk+UDqW81175jnGi0GxKO82NPvh0VLSpmA6JAcJ8ZC0mxJaBHAaxx+p8lPkvQxnaN+EuRzi19J8M1X43AEHplrrA6LU1qIMmRYz8zl4IPEUrwc4g+k+pUsc7D62E7Py2oPvTj4BE9q+ynd/maAtnUYNOLhy4jxUDWhrpAnWdeOZHIa6r0bs6/fpg5z3XdRYoudl3C2aeM4ehKn/9rB5LcdrOyXsHe3oNmkT32j8hOo/T8umQVPBgtkLMuWy9L4445YxQYbZV9Fq+ynZ04iru/wDLbBqOHDRg/UfQX4KpfSearMPRbvVqh3WN0HFx4AAEnovaOz2x2YSg2i07xAl7jm9595568NBAyCW5WzdJnZj1Fhh6LWNDWgAAANAyAGQC7xNXdY5x0BKTBJVd2wxYpYSq7g0n0SOd45sF+/UxFU/8yvY6RIWhfcWAnyJ++XBU/ZTDxh2Ge8Xbx1N3PPDorxmTtCJNvHh4eqbL2tETrkZ3v5/f3dUPbPA+1oOc0d5kPbx0keUq+NL3dfAnIR4IfGNuQdLZDIbwP/SjG6uxZt5iwh7Oagw77kZOHkeqLxODNEh49x7qgHItcRHlBQWOG64VB0K7Z2lfsfTqTyOoXSjADgHeqYVIsfPQrFNisNiHMdvMcWuGRFla/wDyfFf4n+1v0VG0ruEDUpYrGtJkAvPF2XgELUxDnTfNDypqbU2pE92u6K4xrrRxUgN44D1Q2LMuaENvpcbLYCx7dS2R1ZLv2R+DqRF7CPr8g3zVbga25UYf1R52+Uqwq0YeWjS4zy/uI9FHIy9kEWJ4ZHlnxtKeowkgxaNNTfhzPouMC0ENAnSYtPEyMs3eSMeydORBM36kcT/tUNnV1UNGc26DpwOQb5rRdh8eG1vYuyeIGvfGR8YcqaqRpGkekDX9CggtcC0wQQQcsrjKOHr1Wss29gfRBaWuEg2IN5B0KwW3cD/Jhzv+UZLSfyn4CT6f2W32Bj/5ig2p+b3X/wCYZnxz8UNtnZoxTm4ZwmnLalb/ACNMtZ1cQR0DuSTUvsmGdxql/hfsAgOx9YfiVhFIEe5RnONC6x6Ac1u3p7CwHKOSTBJRbust32IoiBKyX8ScTuYGoT+YQP29VrKnBecfxYxe8KFAX36jZHIGSie2T2qtlYYClTbH5Rlx3SZ+XmiPZ89DEibm3EaBTUWAACdItb8vULh2YgwLWM8DwA5IqqJ4JjvA3/8AOvJBYhn4jmzmDzFzxEDVEvyEHrf9PRQSC9zjBgRxyi9/8qIGar7KNXBOaLuDnVG9Rf1g+ayVEh7IOoXpmxQTQaDqATHB5J65FYDbWD9jiXtAhjvxGcN12g6GV08WW9wmUA7PeRLDmEU5ky0oWuIIqDSzunFGZ3VL9jH6ANqFrt3Prr0KJ9sfhKH2nTsHjMIT+dcmk2S5eN0Oo0o6qcBMAnqFYeTSKke8VE4TVb0XdD3imYPxPBaX4FhsiRxt9+CvWu36TKgHeHdOWYPHn3foqzBN7gGmv7+g9VY7KlpNLLemDwItIn77qjkcfgqu53SNQQDJEcMuE8MwrdkEGxnWDbWbTaxd6KjaHbu8B7ulpDRcjrF8vylXeEcDnBsJMkiADJ1zh2uqjkZwADaIJsJBMEgZEjOSP6VxvZGRHwzoLibj9I8eqnNIXExH6crkE3HJ3ko6pAkAxmReIm9hNrlvklaveye1/ZVQ0neZU7vAb0d08BcRn+ZehYajuAzdziXOPE5eQAAHILyIQW2iwBbx4gegXonZXa3t6A3jNRnddxNpa7xBHjKykyi8lTU1FSCnAWJmqGF5F2pxHttphs2pU3GeDj/YL1fF1IaTwBXjGxnmtiMTVIneqFo5gBwi14keibE2HtpGc+8J16Re4+ShrgWJaMmwZGoOXL6qas6CJEZTNoMGZ8FX4twg3N7RI+EfX1WKGpm0QNOH6UJtSuWUKxFrOAI4uaQLf6lPRNzac8uTnH9h5IDtESabW/HWpt6/iCRkOHPRNjOwtdm0S1gAOTWjI/lAH3nkqDtps11SmKoA3qUugR7ndDgIz0PgeN9G1tj/AKx8hpfVTFt+9GcdZJmfILZlq7Z8PHart1wP5XWKmw1pbw9Roidt7L9lUfQm1n0z+l1wPDJAYepIDjmO679v3811+4SXVFVGSCDqqf8AkXK6KZZLo2WMpgEPUcu6M+zE5woGmbrYy3p3RzSojvu8k1LNSUG/iHqilnwu2YWA0t70gEjy+oRLqktBiCCJ0sRxNviP+pdYF53Wg2zIBkm82j+lTYzDd2QSc8h1NzqbN1+S57ftQSDcAx3xvG0591w/3nhl5LDPh26RMR/TG8Bl+kibaqHDz7IcWPif01ARnHxAFT4psN3xpeJGUgnW3dLfIpWrN7QTkBF/DXK+j/Rc1KTiNL3MWM66x+Z1+WSiwlQkC82M3M2EE58Gu8wimtJsSed3cweolzvJI0O2icwLESNNZAmOYHgrPs9jf5epv/kiC2c28gYExuIGnTOUnQybz58yP6eSd1MAgt1z0uZOcDjTQyvXMK7egtMggEHiDqiKh0Hisx2H2rNN1A5s9w8WTl4At81oiUqN6VHa7Gilharzoxx9F5f2PoRhmki7u8eJ9+1mmy1H8Ysdu4P2QzqFrPM39FXbNw+7SAGgaOhG/N4PBP8A1PgcgWAMeMacJ+7IXENtnnGfDu88s/vMuO99L/l5c3KHFMdbS8R/qHOEqiGhSaWnpzAOflnzzQe1SHPwg41gTcaU3uvCsy1zWEzYRNxe1OPmeCAxMGthRHu+0d4CmWeGabH2yrYMjj+b/s81JJiRnY5Hi4ybQk1rZ110kflnpa3h4qF1MGREyOXwuuJCxih7ZbLNSj7Rol1LvgAQSzuhw8r+C8/czvGMniR/mH2F7F7IE8uF4z4RyXlW2MH7Gq+npTcHNP6HAH5GP9Kvw5fBcojoukAp91Q4U3c3gT63RO6qU07iB1moSnkiqpshhknhMklPNT0GTU6wh6ZRVAfiDw+ayiL7B2a10C2ZN/E+Q1V1TdLDfge7l3f/AMxrqqplPu8YnnYHx0HEeStdnP8A29d0Wjx81y1QHhKY9oWfG0tvfvNuCSZj3TwzRlItzMEG8TGcgCN7kzRDVzDg7PdI9ft6IoPIdHE2g2ixE5CIZzzWUIcGd125pJjUboIEZ8nK2DCQ02FuBtMCx0953l1QFfDjetpz4gCfeOcOt9kjCYjeFyJPEXBPKP1D+lZQKY3UHOYgEe9JGn6h5BM+YJBg5N+YFo13broAbsi0EZg66f8ASpHMbJgCRlA1vAuOLW/1c1jXeAxDqbhUYSSIIv8ACCIOdiA3mvTcLiG1GNe3JwBH0815fUaGX0mAI6n/AOsea03ZLaG5+C6wMlkxmJkW47pPhzQTOMn/ABSr+1xuGw8/m3j4WHqrGg215jz4nhwPofDN43EGvteq7Sk1rQeB3mz81qaDSR1vMh35NLBNl8QY+jvw7pJ055Gd0ROnC3FVT53jxBM3AvLyIBJvl6eNvuObJtE3MD4gMrTkqphJcbjX8uUgHKf1JDRHtQwwiwGUiJMBw5fCPVQBp/mGEHKk/wD3PEa2MD0KI2sC57AXXNuGuuXH5rnCj8d54Nosnwc/jbMWWwVZU3Qbg5n13bx5Ll7jr5xkd13LxUpGnO1ubJ+/sq8m/hGYgj9vXojbEbap3rgZmw4bxjTkFie3OHirTqQYe003TrFx6Fy3vs3G+9kSfdF5I5LP9ucJOFc4C7DTfabAGCf6SeCfjusmV5rQMPjkB4tJH7I/eVZiLVW8/wB/7hHSuqsxvtFVHdP3wQxRLvdPRCu+/JbC5O6RujaI7zfvVA0s/NHU9Flbj6avAmWkG4N+Fhab30OifCOAcAb6HLmLg9SMkH2duL8HZWyGsZ5nzRlH/iEabzx5SbrmqgzFu3hMG8fFHrFu9w4clxhjZruomZuIIkjK3PTykc7PrHqfoFHXO6y3+JT55i+aQC3Exnl1/LH6r2ByQ9J8PgXm4gi2mU8SCOiPpsmZnXU/CPqfND1mAEx8TdT8R+pWgZRdYgNixIvwMgeYZ9winPyMaAj3b6ZREDcA8dbICm8gCP0aDUslFvswEfCP+wfJLQaqDGtgL8YsZJH6D5rmnU3RO9BaQRcyN0iePwv+V1y33gOMz5f3Pmg9p1C2jVIsYd6hyIFd2RZvvrVnm76riDBMgE2yj8q0tMiwBZGuUWEadfkqnsdRb/L0LZtBMWknekyrjCe94n/pp/U/YTZ3dZPQoHuxYyL8M8h9EDg6REmBGV9bNH7LrEONmzY71hb41Lh7QATpqfjd9AkarcVPtmCZyy5EDMcx96Pgb1axifxWgTM9xlMcOvmhqdd3tWX+/v5Kw2HdpJ1q4gnqHuhbIKJJztN/SG8vv590gL2iQL5ge9lr9+fVUwHEfERx/KePQLpwkzr5fmIQxzoBN87cSWnTPP7vEG2cOX0KrJneY9pPUHU/UKUXHhT14tYfmuqQlzh1+5RGPEccbU3efp/dTe2S2uIaeVRw9XKv3yu6ekrdV//Z"
            />
          </div>
          <div className="ChatList__ContactList__Info">
            <div className="ChatList__ContactList__Name">
              <span className="ChatList__ContactList__FullName">
                Mace Windu
              </span>
              <span className="ChatList__ContactList__NameDot">
                <MoreHorizIcon />
              </span>
            </div>
            <div className="ChatList__ContactList__MessInfo">
              <span className="ChatList__ContactList__LastMessage">Thanks</span>
              <span className="ChatList__ContactList__seenTime">42min</span>
            </div>
          </div>
        </div>
        <div className="ChatList__ContactList">
          <div className="ChatList__ContactList__Avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://media1.popsugar-assets.com/files/thumbor/3V8qh1kIlOKjZCnfQq-2vhQbQnM/249x163:2149x2063/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/24/905/n/1922398/d9c250fc5e5435738e0e78.04534326_/i/Kanye-West.jpg"
            />
          </div>
          <div className="ChatList__ContactList__Info">
            <div className="ChatList__ContactList__Name">
              <span className="ChatList__ContactList__FullName">
                Kayne West
              </span>
              <span className="ChatList__ContactList__NameDot">
                <MoreHorizIcon />
              </span>
            </div>
            <div className="ChatList__ContactList__MessInfo">
              <span className="ChatList__ContactList__LastMessage">
                Exactly Right.
              </span>
              <span className="ChatList__ContactList__seenTime">52min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
