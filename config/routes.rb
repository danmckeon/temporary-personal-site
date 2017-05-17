Rails.application.routes.draw do
  root 'index#index'
  get '/resume', to: 'index#resume'
end
