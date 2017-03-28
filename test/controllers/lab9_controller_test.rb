require 'test_helper'

class Lab9ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get lab9_index_url
    assert_response :success
  end

  test "should get server" do
    get lab9_server_url
    assert_response :success
  end

end
