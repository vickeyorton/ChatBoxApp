import React from "react";
import "./ChatBoard.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import PhoneIcon from "@material-ui/icons/Phone";
import VideocamIcon from "@material-ui/icons/Videocam";
import Avatar from "@material-ui/core/Avatar";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import IconButton from "@material-ui/core/IconButton";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SendIcon from "@material-ui/icons/Send";

export default function ChatBoard() {
  return (
    <div className="ChatBoard">
      <div className="ChatBoard__Header">
        <div className="ChatBoard__Header__User">
          <span className="ChatBoard__Header__UserName">Kirsten Mckeller</span>
          <span className="ChatBoard__Header__UserStatus">is Typing..</span>
        </div>
        <div className="ChatBoard__Header__Icons">
          <div className="ChatBoard__Header__IconValue">
            <StarRateIcon />
          </div>
          <div className="ChatBoard__Header__IconValue">
            <PhoneIcon />
          </div>
          <div className="ChatBoard__Header__IconValue">
            <VideocamIcon />
          </div>
        </div>
      </div>
      <div className="ChatBoard__Content">
        <div className="ChatBoard__ContentMessage">
          <div className="ChatBoard__ContentMessage__List">
            <div className="ChatBoard__ContentMessage__ListDisplay">
              <div className="ChatBoard__ContentMessage__ListAvatar">
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pinimg.com/originals/cc/2e/c7/cc2ec7995c93eee63d7c2f1e5ecab101.jpg"
                />
                <div className="ChatBoard__ContentMessage__ListTime">12:43</div>
              </div>
              <div className="ChatBoard__ContentMessage__ListMess">
                It goes little something like this.
              </div>
            </div>
          </div>
          <div className="ChatBoard__ContentMessage__List">
            <div className="ChatBoard__ContentMessage__ListDisplay">
              <div className="ChatBoard__ContentMessage__ListAvatar">
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pinimg.com/originals/cc/2e/c7/cc2ec7995c93eee63d7c2f1e5ecab101.jpg"
                />
                <div className="ChatBoard__ContentMessage__ListTime">12:51</div>
              </div>
              <div className="ChatBoard__ContentMessage__ListMess">
                It was all a dream, I used to read Word Up magazine Salt'n'Pepa
                and Heavy D up in the limousine.
              </div>
            </div>
          </div>
          <div className="ChatBoard__ContentMessage__List ChatBoard__ContentMessage__ListReply">
            <div className="ChatBoard__ContentMessage__ListDisplay">
              <div className="ChatBoard__ContentMessage__ListAvatar">
                <Avatar
                  alt="Dwayne Johnson"
                  src="https://images.news18.com/ibnlive/uploads/2019/08/Sports-61.png?impolicy=website&width=534&height=356"
                />
                <div className="ChatBoard__ContentMessage__ListTime">12:55</div>
              </div>
              <div className="ChatBoard__ContentMessage__ListMess">
                Did you ever Hang' pictures on your wall?
              </div>
            </div>
          </div>
          <div className="ChatBoard__ContentMessage__List">
            <div className="ChatBoard__ContentMessage__ListDisplay">
              <div className="ChatBoard__ContentMessage__ListAvatar">
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pinimg.com/originals/cc/2e/c7/cc2ec7995c93eee63d7c2f1e5ecab101.jpg"
                />
                <div className="ChatBoard__ContentMessage__ListTime">12:58</div>
              </div>
              <div className="ChatBoard__ContentMessage__ListMess">
                Yes I did! Every Saturday! Rap Attack, Mr. Magic, Marley Marl. I
                even let my tape rock 'til my tape popped. Smokin' weed and
                bamboo, sippin' on private stock. But this was way back, when I
                had the red and black lumberjack with the hat to match.
              </div>
            </div>
          </div>
          <div className="ChatBoard__ContentMessage__List ChatBoard__ContentMessage__ListReply">
            <div className="ChatBoard__ContentMessage__ListDisplay">
              <div className="ChatBoard__ContentMessage__ListAvatar">
                <Avatar
                  alt="Dwayne Johnson"
                  src="https://images.news18.com/ibnlive/uploads/2019/08/Sports-61.png?impolicy=website&width=534&height=356"
                />
                <div className="ChatBoard__ContentMessage__ListTime">1:05</div>
              </div>
              <div className="ChatBoard__ContentMessage__ListMess">
                Haha awesome, I think I know the album your looking. for.
              </div>
            </div>
          </div>

          <div className="ChatBoard__ContentMessage__List">
            <div className="ChatBoard__ContentMessage__ListDisplay">
              <div className="ChatBoard__ContentMessage__ListAvatar">
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pinimg.com/originals/cc/2e/c7/cc2ec7995c93eee63d7c2f1e5ecab101.jpg"
                />
                <div className="ChatBoard__ContentMessage__ListTime">12:58</div>
              </div>
              <div className="ChatBoard__ContentMessage__ListMess">
                Yes I did! Every Saturday! Rap Attack, Mr. Magic, Marley Marl. I
                even let my tape rock 'til my tape popped. Smokin' weed and
                bamboo, sippin' on private stock. But this was way back, when I
                had the red and black lumberjack with the hat to match.
              </div>
            </div>
          </div>
          <div className="ChatBoard__ContentMessage__List ChatBoard__ContentMessage__ListReply">
            <div className="ChatBoard__ContentMessage__ListDisplay">
              <div className="ChatBoard__ContentMessage__ListAvatar">
                <Avatar
                  alt="Dwayne Johnson"
                  src="https://images.news18.com/ibnlive/uploads/2019/08/Sports-61.png?impolicy=website&width=534&height=356"
                />
                <div className="ChatBoard__ContentMessage__ListTime">1:05</div>
              </div>
              <div className="ChatBoard__ContentMessage__ListMess">
                Haha awesome, I think I know the album your looking. for.
              </div>
            </div>
          </div>
          <div className="ChatBoard__ContentMessage__List">
            <div className="ChatBoard__ContentMessage__ListDisplay">
              <div className="ChatBoard__ContentMessage__ListAvatar">
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pinimg.com/originals/cc/2e/c7/cc2ec7995c93eee63d7c2f1e5ecab101.jpg"
                />
                <div className="ChatBoard__ContentMessage__ListTime">12:58</div>
              </div>
              <div className="ChatBoard__ContentMessage__ListMess">
                Yes I did! Every Saturday! Rap Attack, Mr. Magic, Marley Marl. I
                even let my tape rock 'til my tape popped. Smokin' weed and
                bamboo, sippin' on private stock. But this was way back, when I
                had the red and black lumberjack with the hat to match.
              </div>
            </div>
          </div>
          <div className="ChatBoard__ContentMessage__List ChatBoard__ContentMessage__ListReply">
            <div className="ChatBoard__ContentMessage__ListDisplay">
              <div className="ChatBoard__ContentMessage__ListAvatar">
                <Avatar
                  alt="Dwayne Johnson"
                  src="https://images.news18.com/ibnlive/uploads/2019/08/Sports-61.png?impolicy=website&width=534&height=356"
                />
                <div className="ChatBoard__ContentMessage__ListTime">1:05</div>
              </div>
              <div className="ChatBoard__ContentMessage__ListMess">
                Haha awesome, I think I know the album your looking. for.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ChatBoard__Footer">
        <div className="ChatBoard__Footer__Content">
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <input type="text" placeholder="Type your message" />
          <div className="ChatBoard__Footer__ContentRight">
            <IconButton>
              <SentimentSatisfiedIcon />
            </IconButton>
            <IconButton>
              <SendIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
