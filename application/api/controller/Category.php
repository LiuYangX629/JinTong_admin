<?php


namespace app\api\controller;


class Category
{
    public function category(){
        //判断当前请求方法
        switch ($this->method){
            case "get":return $this->get();
            case "post":return $this->post();
            case "put":return $this->put();
            case "delete":return $this->delete();
        }
    }

    private function get(){

    }
    private function post(){

    }
    private function put(){

    }
    private function delete(){

    }

}