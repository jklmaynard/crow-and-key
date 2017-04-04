class QuestionsController < ApplicationController
  def create
    book = Book.find(params[:book_id])
    question = book.questions.create(questions_params)
    respond_with book, question
  end
  def index
    book = Book.find(params[:book_id])
    respond_with book.questions
  end

  def edit

  end
  private
  def questions_params
    params.require(:question).permit(:text, :user_id)
  end

end
