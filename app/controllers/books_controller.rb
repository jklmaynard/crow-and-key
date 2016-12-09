class BooksController < ApplicationController

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
    params.require(:book).permit(:title, :summary)
  end

end
