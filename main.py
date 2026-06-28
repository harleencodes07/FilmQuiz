from question_model import Question
from data import question_data
from quiz_brain import QuizBrain


question_bank = []
for i in question_data:
    ques_text = i["text"]
    ques_answer = i["answer"]
    new_ques = Question(q_text = ques_text,q_answer=ques_answer)
    question_bank.append(new_ques)
quiz = QuizBrain(question_bank)

while quiz.still_has_questions():
    quiz.next_question()
print("Congratulations, you have completed the quiz.")
print(f"You scored {quiz.score}/{len(question_bank)} questions.")