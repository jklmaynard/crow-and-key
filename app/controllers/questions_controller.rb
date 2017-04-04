class QuestionsController < ApplicationController
  def index
    book = Book.find(params[:book_id])
    respond_with book.questions
  end

  def create
    book = Book.find(params[:book_id])
    question = book.questions.create(questions_params)
    respond_with book, question
  end

  def upvote
    book = Book.find(params[:book_id])
    question = book.questions.find(params[:id])
    question.increment!(:up_votes)

    respond_with book, question
  end

  private
  def questions_params
    params.require(:question).permit(:text, :user_id, :up_votes)
  end

end
