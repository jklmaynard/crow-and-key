class BooksController < ApplicationController

  def index
    respond_with Book.all
  end

  def show
    respond_with Book.find(params[:id])
  end

  def create
    respond_with Book.create(book_params)
  end

  def show
    respond_with Book.find(params[:id])
  end

  private
  def book_params
    params.require(:book).permit(:title, :author, :summary)
  end

end
