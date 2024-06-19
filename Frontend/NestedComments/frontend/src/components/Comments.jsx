import Action from "../Action/Action";
import "./comments.css";
import { useState } from "react";

export default function Comments({ comments }) {
  const [inputValue, setInputValue] = useState("");
  const [reply, setReply] = useState("");
  const [editOn, setEditon] = useState(false);
  const [showReply, setShowReply] = useState(false);

  const handleClick = () => {};

  const handleEdit = () => {
    setEditon(true);
    setInputValue(comments?.name);
  };

  const editComment = (e) => {
    setInputValue("");
  };

  const handleReply = (e) => {
    setReply(e);
  };

  return (
    <div>
      <div
        className={comments?.id === 1 ? "inputContainer" : "commentContainer"}
      >
        {comments?.id === 1 ? (
          <>
            <input
              placeholder="Comment Here"
              value={inputValue}
              className="input-box"
              autoFocus
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Action
              classname={"comment-btn"}
              type={"Comment"}
              handleClick={handleClick}
            />
          </>
        ) : (
          <>
            {editOn ? (
              <input
                placeholder="Comment Here"
                value={inputValue}
                className="comment-box"
                autoFocus
                onChange={(e) => setInputValue(e.target.value)}
              />
            ) : (
              <span style={{ wordWrap: "break-word" }}>{comments?.name}</span>
            )}

            {editOn ? (
              <div className="btns">
                <Action
                  classname={"reply"}
                  type={"Save"}
                  handleClick={() => setEditon(false)}
                />
                <Action
                  classname={"reply"}
                  type={"Cancel"}
                  handleClick={() => setEditon(false)}
                />
              </div>
            ) : (
              <div className="btns">
                <Action
                  classname={"reply"}
                  type={"Reply"}
                  handleClick={() => setShowReply(true)}
                />
                <Action
                  classname={"reply"}
                  type={"Edit"}
                  handleClick={handleEdit}
                />
                <Action classname={"reply"} type={"Delete"} />
              </div>
            )}
          </>
        )}
      </div>
      {showReply ? (
        <div className="reply-container">
          <input
            className="reply-input"
            autoFocus
            value={reply}
            onChange={(e) => handleReply(e.target.value)}
          />
          <Action
            classname={"reply"}
            type={"Reply"}
            handleClick={handleReply}
          />
          <Action
            classname={"reply"}
            type={"Cancel"}
            handleClick={() => setShowReply(false)}
          />
        </div>
      ) : (
        ""
      )}
      <div style={{ paddingLeft: "25px" }}>
        {comments?.items?.map((cmt) => (
          <Comments key={cmt?.id} comments={cmt} />
        ))}
      </div>
    </div>
  );
}
