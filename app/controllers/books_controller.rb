class BooksController < ApplicationController

  def index
    respond_with Book.all
  end

  def show
    respond_with Book.find(params[:id])
  end

  def create
    book = Book.create(book_params)
    book.update(image: decode_base64)
    respond_with book
  end

  def edit
    respond_with Book.find(params[:id])
  end

  def update
    book = Book.find(params[:id])
    book.update(book_params)
    respond_with book
  end

  def destroy
    respond_with Book.destroy(params[:id])
  end

  private
  def book_params
    params.require(:book).permit(:title, :author, :summary, )
  end
  def decode_base64
    decoded_data = Base64.decode64(params[:image][:base64])
    data = StringIO.new(decoded_data)
    data
  end

end
