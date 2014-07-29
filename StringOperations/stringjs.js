window.onload = doStringOperations;
function stringsOps() {
    this.concat = function concat(str1, str2) {
        var result = str1 + str2;
        return result;
    }


    this.substring = function substring(str, start_index, end_index) {
        var i = parseInt(start_index);
        if (i < 0)
            return "start_index cannot be less than zero";
        if (parseInt(end_index) < i) {
            return "start index cannot be greather than end index";
        }
        var j = 0;
        var length1 = 0;
        while (str[j] != null) {
            length1 = length1 + 1;
            j = j + 1;
        }
        if (parseInt(end_index) > j) {
            return "end index cannot be greather than string length";
        }

        var res = str[i];
        var cnt = 1;
        i++;
        if (document.getElementById("end_index").value == "") {
            while (str[i] != null) {
                //res[cnt] = str[i]
                res = res + str[i];
                i = i + 1;
                cnt = cnt + 1;
            }
        }
        else {
            while (str[i] != null && i <= parseInt(end_index)) {
                res = res + str[i]
                i = i + 1;
            }
        }
        return res;
    }


    this.length = function length(in_str) {
        var i = 0;
        var length1 = 0;
        while (in_str[i] != null) {
            length1 = length1 + 1;
            i = i + 1;
        }
        return length1;
    }


    this.chatAt = function chatAt(input_str, pos) {
        if (parseInt(pos) < 1) {
            return "position is less than minimum value(i.e, 1)";
        }
        var j = 0;
        var length1 = 0;
        while (input_str[j] != null) {
            length1 = length1 + 1;
            j = j + 1;
        }
        
        if (parseInt(pos) > j) {
            return "position is greather than string length";
        }
        return input_str[pos - 1];
    }



    this.lastindexof = function lastindexof(str, ch1) {
        var i = 0;
        var flag = 1;
        var lastpos;
        while (str[i] != null) {
            if (str[i] == ch1) {
                lastpos = i;
                flag = 0;
            }
            i = i + 1;
        }
        if (flag == 1)
            return "character not found";
        return lastpos + 1;
    }


    this.indexof = function indexof(str, ch1) {
        var i = 0;
        var flag = 1;
        var index;
        while (str[i] != null) {
            if (str[i] == ch1) {
                index = i;
                flag = 0;
                break;
            }
            i = i + 1;
        }

        if (flag == 1)
            return "character not found";
        return index + 1;
    }


    this.replace = function replace(str, ch1, ch2) {
        var flag = 0;
        var i = 0;
        var res = str[0];
        var cnt = 0;
        var str_length = 0;
        debugger;
        while (str[str_length] != null)
            str_length = str_length + 1;
        var ch1_length = 0;
        while (ch1[ch1_length] != null) {
            ch1_length = ch1_length + 1;
        }
        var ch2_length = 0;
        while (ch2[ch2_length] != null)
            ch2_length = ch2_length + 1;

        while (str[i] != null) {
            var j = 0;
            var k = i;
     
            if ((str_length - i) < ch1_length) {
                while (str[i] != null) {
                    res = res + str[i];
                    i = i + 1;
                }
                var result = res[1];
                var count = 2;
                while (res[count] != null) {
                    result = result + res[count]
                    count = count + 1;
                }
                return result;
            }
            cnt = 0;
            while (ch1[j] != null) {
                if (ch1[j] == str[k]) {
                    cnt = cnt + 1;
                }
                else {
                    break;
                }
                j = j + 1;
                k = k + 1;
            }
            if (cnt == ch1_length) {
                var p = 0;
                while (p < ch2_length) {
                    res = res + ch2[p];
                    p = p + 1;
                }
                flag = 1;
                
                i = i + ch1_length ;
                break;
            }
            else {
                res = res+ str[i];
            }
            i = i + 1;
        }
        if (flag == 1) {
        
            while (str[i] != null) {
                res = res + str[i];
                i = i + 1;
            }
        }
        var result = res[1];
        var count = 2;
        while (res[count] != null) {
            result = result + res[count]
            count = count + 1;
        }
        return result;

    }
}
function doStringOperations() {
    document.getElementById("concat").onclick=function do_concat() {

        var obj1 = new stringsOps();
        var input1 = document.getElementById("input1").value;
        var input2 = document.getElementById("input2").value;
        var result = obj1.concat(input1, input2);
        document.getElementById("result").innerHTML = result;
    }

    document.getElementById("substring").onclick = function do_substring() {
        var obj1 = new stringsOps();
        var result = obj1.substring(document.getElementById("input1").value, document.getElementById("start_index").value, document.getElementById("end_index").value);
        document.getElementById("result").innerHTML = result;
    }

    document.getElementById("length").onclick = function do_length() {
        var obj1 = new stringsOps();
        var result = obj1.length(document.getElementById("input1").value);
        document.getElementById("result").innerHTML = result;
    }

    document.getElementById("charAt").onclick = function do_chatAt() {
        var obj1 = new stringsOps();
        var result = obj1.chatAt(document.getElementById("input1").value, document.getElementById("pos").value);
        document.getElementById("result").innerHTML = result;
    }

    document.getElementById("lastindexof").onclick = function do_lastindexof() {
        var obj1 = new stringsOps();
        var result = obj1.lastindexof(document.getElementById("input1").value, document.getElementById("char1").value);
        document.getElementById("result").innerHTML = result;
    }

    document.getElementById("indexof").onclick = function do_indexof() {
        var obj1 = new stringsOps();
        var result = obj1.indexof(document.getElementById("input1").value, document.getElementById("char2").value);
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("replace").onclick=function do_replace() {
        var obj1 = new stringsOps();
        //debugger;
        var result = obj1.replace(document.getElementById("input1").value, document.getElementById("to_replace").value, document.getElementById("replace_by").value);
        document.getElementById("result").innerHTML = result;
    }
}