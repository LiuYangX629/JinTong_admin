<?php


namespace app\api\controller;


class Upload
{
    function upload(){
        $file=input("file.file");
        if(empty($file)){
            $this->error('请选择上传文件');
        }
        //移动到框架应用根目录/public/uploads/目录下
        $info = $file->move(ROOT_PATH .'public' .DS. 'uploads');

        if($info){
            $name=$info->getSaveName();
            $name=str_replace("\\","/",$name);
            echo "/uploads/".$name;
        }else{
            echo "error";
        }
    }

}